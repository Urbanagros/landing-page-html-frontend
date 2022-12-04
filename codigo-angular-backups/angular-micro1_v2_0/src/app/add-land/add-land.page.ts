import { Component, OnInit } from '@angular/core';
import { NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Land } from '../models/land';
import { LandService } from '../services/land.service';

@Component({
  selector: 'app-add-land',
  templateUrl: './add-land.page.html',
  styleUrls: ['./add-land.page.scss'],
})
export class AddLandPage implements OnInit {

  land: Land = new Land();
  landForm: UntypedFormGroup = this.formBuilder.group({
    'name': [this.land.name, Validators.required],
    'address': [this.land.address, Validators.required],
    'city': [this.land.cityAddress, Validators.required],
    'state': [this.land.state, Validators.required],
    'zipcode': [this.land.zipcode, Validators.required]
  });
  title: String;
  id: number;
  isLoadingResults = false;
  constructor(
    private service: LandService,
    private routeAct: ActivatedRoute,
    private router: Router,
    private formBuilder: UntypedFormBuilder) {

    this.id = routeAct.snapshot.params['id'];
    this.title = 'Add';
  }
  ngOnInit() {

    if (this.id) {
      this.title = 'Edit';
      // This is not the ideal way to pass information to another component.
      // There are other forms such as Inputs, Redux and Services, but due to lack of time I decided to use this technique.
      if (localStorage.getItem('land')) {
        this.land = JSON.parse(localStorage.getItem('land') || '{}');
      }

      //this.landForm = 
    } else {
      this.landForm = this.formBuilder.group({
        'name': [null, Validators.required],
        'address': [null, Validators.required],
        'city': [null, Validators.required],
        'state': [null, Validators.required],
        'zipcode': [null, Validators.required]
      });
    }
  }

  submitUserForm(form: NgForm) {
    this.isLoadingResults = true;
    this.land = this.landForm.value;
   
    if (this.id) {

   

      let data = {
        name: this.land.name,
        address: this.land.address,
        number: this.land.numberAddress,
        city: this.land.cityAddress,
        user_id: 1
      }
      this.land.id = this.id;
      this.service.editLand(data).pipe(
        tap((retorno: Land) =>
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
            this.router.navigate(['animals'])
          },
          error: (erro: any) => {
            console.log('entrou no erro')
            alert("Usuário ou Senha inválido(s)!");
            console.log(erro)
          }
        }
      )
    } else {
          /*
    export class Land {
      public id: number = 0;
      public name: string = '';
      public address: string = '';
      public cityAddress: string = '';
      public districtAddress: string = '';
      public state: string = '';
      public numberAddress: string = '';
      public zipcode: string = '';
      public landArea: string = '';
  }*/
      let data = {
        name: this.landForm.controls['name'].value,
        address: this.landForm.controls['address'].value,
        cityAddress: this.landForm.controls['city'].value,
        districAddress: 'Morro Alto',
        state: this.landForm.controls['state'].value,
        numberAddress: 122,
        zipcode: '121321',
        landArea: 124.251,
      }
      this.service.addLand(data).pipe(
        tap((retorno: Land) =>
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
            this.router.navigate(['animals'])
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

}
