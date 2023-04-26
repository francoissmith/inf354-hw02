import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  data = [];
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getPastOrders().subscribe((account:any) => { this.data = account; console.log(this.data); });
  }

}
