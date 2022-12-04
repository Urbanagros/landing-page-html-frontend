import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLandPageRoutingModule } from './add-land-routing.module';

import { AddLandPage } from './add-land.page';
import { HttpClientModule } from '@angular/common/http';
import { LandService } from '../services/land.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    AddLandPageRoutingModule
  ],
  providers: [LandService],
  declarations: [AddLandPage]
})
export class AddLandPageModule {}
