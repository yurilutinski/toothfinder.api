// import {Component} from '@angular/core';
// import {Consultorio} from './consultorio';
// import {ConsultorioService} from './consultorio.service';

// @Component({
//   selector: 'app-consultorio',
//   templateUrl: './consultorio.component.html'
// })
// export class ConsultorioComponent {

//   current: Consultorio = {id: null, nome: ''};
//   lista: Consultorio[];

//   constructor(private consultorioService: ConsultorioService) {
//     this.listarConsultorios();
//   }

//   async listarConsultorios() {
//     this.lista = await this.consultorioService.listar().toPromise();
//   }

//   novo() {
//     this.current = {id: null, nome: ''};
//   }

//   salvar() {
//     if (!this.current.nome) {
//       return;
//     }
//     this.consultorioService.salvar(this.current).subscribe(resp => {
//       this.novo();
//       this.listarConsultorios();
//     });
//   }

//   atualizar() {
//     this.listarConsultorios();
//   }

//   editar(consultorio: Consultorio) {
//     this.current = JSON.parse(JSON.stringify(consultorio));
//   }
// }
import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
     selector: 'app-consultorio',
     templateUrl: './consultorio.component.html'
 })
 class usuarioCliente {
   nome: string;
   email: string;
   senha: string;
   confSenha: string;

 }

 export class ConsultorioComponent { 
    cliente = new usuarioCliente();
    salvar(form: NgForm) {
      this.cliente.nome = form.value.nomeCompleto;
      this.cliente.email = form.value.emailValido;
      this.cliente.senha = form.value.senha;
      this.cliente.confSenha = form.value.confSenha;
     
      console.log(form.value);
      console.log(this.cliente);
      // console.log(form.value.nome);
      // console.log(form.value.email);
      // console.log(form.value.senha);
      // console.log(form.value.confSenha);
    }
 }
