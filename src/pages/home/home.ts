import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ClienteProvider, ClienteLista } from '../../providers/cliente/cliente';
import { EditarClientePage } from '../editar-cliente/editar-cliente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  clientes:ClienteLista[];

  constructor(public navCtrl: NavController, private clientep:ClienteProvider,private toast:ToastController) {

  }
  ionViewDidLoad() {
    this.clientep.getAll().then(results=>{
      this.clientes=results;

      

    })
  }
  adicionarCliente(){
    this.navCtrl.push(EditarClientePage);
  }
  editarCliente(item:ClienteLista){
    this.navCtrl.push(EditarClientePage,{key:item.key,cliente:item.cliente});
  }
  removeCliente(item:ClienteLista){
    this.clientep.remove(item.key).then(()=>{
      let index=this.clientes.indexOf(item);
      this.clientes.slice(index,1);
      this.toast.create({ message: 'Contato removido.', duration: 3000, position: 'botton' }).present();

    }
    )
  }

}
