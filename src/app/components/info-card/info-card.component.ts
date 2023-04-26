import { Component, Input, OnInit } from '@angular/core';
import { Info } from 'src/app/shared/Info';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent  implements OnInit {
  @Input() data!: Info;
  constructor() { }

  ngOnInit() {}

}
