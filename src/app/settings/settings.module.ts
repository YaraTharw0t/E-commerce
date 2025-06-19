import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ForgetComponent } from './forget/forget.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    ForgetComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
