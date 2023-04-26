import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-order',
  templateUrl: './past-order.component.html',
  styleUrls: ['./past-order.component.scss'],
})
export class PastOrderComponent  implements OnInit {
  @Input() data!: any;
  constructor() { }

  ngOnInit() {}

}
