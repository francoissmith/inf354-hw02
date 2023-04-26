 import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/Cart';
import { ActionSheetController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  isModalOpen!: boolean;
  presentingElement = undefined;
  data!: Cart[];
  total: number = 0;
  subtotal: number = 0;
  delivery: number = 50;
  constructor(private cartService: CartService, private actionSheetCtrl: ActionSheetController, private toastController: ToastController) {}

  ngOnInit() {
  this.cartService.getCarts().subscribe((cart:Cart[]) => { this.data = cart; console.log(this.data); });
  this.subtotal = this.cartService.getSubTotal();
  this.total = this.subtotal + this.delivery;
  }
  ionViewWillEnter() {
    this.ngOnInit();
  }

  pay() {
    this.confirm().then((confirmed) => {
      if (confirmed) {
        this.showToast('Payment Successful', 'success', 'top');
        this.setOpen(false);
        // this.cartService.clearCart();
        // window.location.reload();
      }
    });
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  

  async showToast(msg: string, color: string, pos: 'top' | 'bottom' | 'middle') {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: pos,
      color: color
    });
    toast.present();
  }

  confirm = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure you?',
      buttons: [
        {
          text: 'Yes',
          id: 'confirm',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };
}
