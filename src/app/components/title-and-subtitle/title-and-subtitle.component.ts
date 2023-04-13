import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-and-subtitle',
  templateUrl: './title-and-subtitle.component.html',
  styleUrls: ['./title-and-subtitle.component.css']
})
export class TitleAndSubtitleComponent {

  @Input() labels = {title:"", subtitle:""};

}
