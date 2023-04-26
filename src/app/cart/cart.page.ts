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
  instructions: string = '';
  constructor(private cartService: CartService, private actionSheetCtrl: ActionSheetController, private toastController: ToastController) {}

  ngOnInit() {
  this.cartService.getCarts().subscribe((cart:Cart[]) => { this.data = cart; console.log(this.data); });
  this.subtotal = this.cartService.getSubTotal();
  this.total = this.subtotal + this.delivery;
  this.cartService.getIstructions().subscribe((instructions:string) => { this.instructions = instructions; console.log(this.instructions); });
  }
  
  // ********* Refresh Page *********
  ionViewWillEnter() {
    this.ngOnInit();
  }

  // ********* Make Payment *********
  pay() {
    this.confirm().then((confirmed) => {
      if (confirmed) {
        this.showToast('Payment Successful', 'success', 'top');
        this.setOpen(false);
        let instructions = document.querySelector('ion-textarea');
        if (instructions == null) {
          this.cartService.clearCart('');
        }
        else {
          this.cartService.clearCart(instructions.value?instructions.value:'');
        }
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
  }

  // ********* Open Modal *********
  setOpen(isOpen: boolean) {
    if(this.data.length == 0){
      this.showToast('Cart is empty', 'danger', 'top');
    } else {
      this.isModalOpen = isOpen;
    } 
  }

  // ********* Show Toast *********
  async showToast(msg: string, color: string, pos: 'top' | 'bottom' | 'middle') {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: pos,
      color: color
    });
    toast.present();
  }

  // ********* Confirm Payment *********
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
