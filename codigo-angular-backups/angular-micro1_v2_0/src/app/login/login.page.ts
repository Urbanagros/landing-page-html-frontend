import { Component, OnInit } from '@angular/core';
import { NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user';
import { UserLoginResponse } from '../models/userLoginResponse';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userForm: UntypedFormGroup = this.formBuilder.group({
    'email': [null, Validators.required],
    'password': [null, Validators.required]
  });

  /*
   constructor(private route: ActivatedRoute) {}
  nome:string = "Professor Bruno Hauck";
  identificador:number = 0;
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.identificador = +params['id'];
        console.log(this.identificador);
      } 
    });
  }
 */

  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder) { }

  ngOnInit() {
    /*
    this.route.params.forEach((params: Params) => {
      if (params['menu'] !== undefined) {
        let identificador = +params['id'];
        console.log(identificador);
      } 
    });*/
  }

  submitUserForm(form: NgForm) {

    

      this.service.login(form).pipe(
        tap((retorno: UserLoginResponse) =>
          console.log("User Add"),
        ),
        catchError(() => {
          //aqui tem exebir um tost ou uma mensagem para usuários com erro
          //vou colocar uma alert depois olhamos como podemos retornar o erro
          alert('Ocorreu um erro');
          return EMPTY
        }
        )
      ).subscribe(
        {
          next: (response) => {
            console.log('entrou no response')
            console.log(response)
            //this.router.navigate(['animals'])
            window.parent.sessionStorage.setItem('token', response.accessToken)
            window.parent.sessionStorage.setItem('userInfo', JSON.stringify(response));
            window.parent.location.href = 'http://localhost/urban/page9.html';
          },
          error: (erro: any) => {
            console.log('entrou no erro')
            alert("Usuário ou Senha inválido(s)!");
            console.log(erro)
          }
        }
      )
    
      // nextHandler
    }

}
