import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  img: string = '';
  @Input('img') set changeImg(newImage: string) {
    this.img = newImage;
    console.log('Change just img =>', this.img);

    //code here!
  }
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/hackerman.jpeg';
  counter = 0;
  counterFn: number | undefined;

  constructor() {
    // before render
    // no async --run one time

    console.log('img constructor ', 'imgValue=> ', this.img);
  }
  ngOnDestroy(): void {
    // run when delete the component
    console.log('ngOnDestroy', 'imgValue=> ', this.img);
    window.clearInterval(this.counterFn);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // before, during render
    // inputs changes -- runs many times
    console.log('ngOnChanges ', 'imgValue=> ', this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void {
    // before render
    // async - fetch -- runs one time
    console.log('ngOnInit ', 'imgValue=> ', this.img);
    this.counterFn = window.setInterval(() => {
      this.counter++;
      console.log('run counter');
    }, 1000);
  }

  ngAfterViewInit(): void {
    // after render
    // handler children

    console.log('ngAfterViewInit ', 'imgValue=> ', this.img);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('loaded hijo!');
    this.loaded.emit(this.img);
  }
}
