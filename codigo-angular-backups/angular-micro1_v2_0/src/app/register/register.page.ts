import { Component, OnInit } from '@angular/core';
import { NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { UserLoginResponse } from '../models/userLoginResponse';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User = new User();
  typeOfUser: string = '';
  userForm: UntypedFormGroup = this.formBuilder.group({
    'firstName': [this.user.firstName, Validators.required],
    'lastName': [this.user.lastName, Validators.required],
    'email': [this.user.email, Validators.required],
    'mobileNumber': [this.user.mobileNumber, Validators.required],
    'cpf': [this.user.address, Validators.required],
    'escolaridade': [this.user.address, Validators.required]
  });
  title: String;
  id: number;
  identificador: number;
  isLoadingResults = false;
  constructor(
    private service: UserService,
    private routeAct: ActivatedRoute,
    private router: Router,
    private routeActivate: ActivatedRoute,
    private formBuilder: UntypedFormBuilder) {

    this.id = routeAct.snapshot.params['id'];
    this.title = 'Add';
  }
  ngOnInit() {
    this.routeActivate.params.forEach((params: Params) => {
      if (params['type'] !== undefined) {
        this.identificador = +params['type'];
        console.log(this.identificador);
      } 
    });
    console.log(this.identificador)
    if(this.identificador===1){
      
      this.title = 'Edit';
      // This is not the ideal way to pass information to another component.
      // There are other forms such as Inputs, Redux and Services, but due to lack of time I decided to use this technique.
      if (sessionStorage.getItem('userInfo')) {
        console.log('edit');
        let userInfo: UserLoginResponse = JSON.parse(sessionStorage.getItem('userInfo') || '{}');
        console.log(userInfo)
        
        /* 'mobileNumber': [this.user.mobileNumber, Validators.required],
    'cpf': [this.user.address, Validators.required],
    'escolaridade': [this.user.address, Validators.required] */
        this.userForm.setValue({
          firstName: userInfo.name, 
          lastName: userInfo.lastName,
          email: userInfo.email,
          cpf: '3432432',
          mobileNumber: '323232',
          escolaridade: 'Superior Completo'
        });
      }else{
        console.log('register')
      }
      //this.userForm = 
    }
  }

  submitUserForm(form: NgForm) {
    console.log('entrou 01');
    this.isLoadingResults = true;
    this.user = this.userForm.value;
    console.log(this.user)


      //let birthdate = this.user.birthdate.split("/");
      console.log('entrou 02')
      //console.log(birthdate)
      console.log('entrou 03')
      //this.user.birthdate = birthdate[2]+'/'+birthdate[1]+'/'+birthdate[0];
      console.log('entrou 04')
      console.log(this.user)
      /*
      {
        "email": "gabrielbdec2",
        "cpf": "048.356.251-37",
        "name": "Gabriel",
        "lastName": "Bernardes de Carvalho",
        "genderType": "MALE",
        "birthdate": "1996/08/30",
        "zipcode": "88906660",
        "mobileNumber": "+55(64)98142-2014",
        "stateAddress": "SC",
        "cityAddress": "Araranguá",
        "districtAddress": "Coloninha",
        "address": "Rua Joana Pereira Nazário",
        "numberAddress": "289",
        "password": "1234abcd",
        "educationFormation": "SUPERIOR_COMPLETE",
        "physicalPersonLicenseItems": [
            {
              "physicalPersonLicenseType": "ulala"
            },
            {
                "physicalPersonLicenseType": "INVESTOR"
            }
        ]
      }
      */
      let data = {
        name: this.userForm.controls['firstName'].value,
        lastName: this.userForm.controls['lastName'].value,
        email: this.userForm.controls['email'].value,
        mobileNumber: this.userForm.controls['mobileNumber'].value,
        genderType:  "MALE",
        birthdate: "1996/08/30",
        cpf: this.user.cpf,
        address: 'N-A',
        stateAddress: 'SC',
        zipcode: "88906660",
        numberAddress: "00000",
        districtAddress: "Santa Lucia",
        password: "1234abcd",
        cityAddress: 'Belo Horizonte',
        statusType: "CREATED",
        educationFormation: "SUPERIOR_COMPLETE",
        physicalPersonLicenseItems: [
          {
              physicalPersonLicenseType:"INVESTOR"
          }
        ]
      }
      console.log(data)

      this.service.addUser(data).pipe(
        tap((retorno: User) =>
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
            window.location.href = 'http://localhost/urban/page7.html';
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
