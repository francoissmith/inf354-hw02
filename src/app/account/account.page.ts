import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { PastOrder } from '../shared/PastOrder';
import { User } from '../shared/User';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  data!: PastOrder[];
  details!: User;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getPastOrders().subscribe((account:any) => { this.data = account; console.log(this.data); });
    this.accountService.getUserDetails().subscribe((account:any) => { this.details = account; console.log(this.details); });
  }

  toggleInputs(event: any) {
    let newdata: User = {name: '', email: '', phone: ''};
    event.target.textContent = event.target.textContent === 'Save' ? 'Edit' : 'Save';
    event.target.attributes.color.value = event.target.attributes.color.value === 'primary' ? 'warning' : 'primary';
    let inputs = document.querySelectorAll('ion-input');
    inputs.forEach((input) => {
      if (input.disabled) {
        input.removeAttribute('disabled');
      } else {
        input.setAttribute('disabled', 'true');
        if (input.value !== 'null' && typeof(input.value) == 'string') {
          if (input.name === 'phone') {
            this.details.phone = input.value;
          }
          if (input.name === 'email') {
            this.details.email = input.value;
          }
          if (input.name === 'name') {
            this.details.name = input.value;
          }
          console.log(input.name);
        }
      }
    });
    localStorage.setItem('userDetails', JSON.stringify(this.details));
  }
}
