import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ClienteProvider, ClienteLista, Cliente } from '../../providers/cliente/cliente';

/**
 * Generated class for the EditarClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-cliente',
  templateUrl: 'editar-cliente.html',
})
export class EditarClientePage {
  model:Cliente;
  key:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,private toast: ToastController,private clientep:ClienteProvider) {
    if(this.navParams.data.cliente&&this.navParams.data.key)
    {
      this.model=this.navParams.data.cliente;
      this.key=this.navParams.data.key;
    }
    else{
      this.model= new Cliente();
    }
  }
  save(){
    this.saveCliente()
    .then(() => {
      this.toast.create({ message: 'cliente salvo.', duration: 3000, position: 'botton' }).present();
      this.navCtrl.pop();
    })
    .catch(() => {
      this.toast.create({ message: 'Erro ao salvar o cliente.', duration: 3000, position: 'botton' }).present();
    });
  }
  saveCliente(){
    if(this.key){
      return this.clientep.update(this.key, this.model);
    }
    else {
      return this.clientep.insert(this.model);
    }
  }

  
    
  

}
