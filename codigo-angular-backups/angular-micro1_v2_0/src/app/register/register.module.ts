import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
    RegisterPageRoutingModule
  ],
  providers: [UserService],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
