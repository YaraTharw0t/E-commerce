import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './forget/forget.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
    {path:'',redirectTo:'update',pathMatch:'full'},
  {path:'update',component:UpdateComponent},
  {path:'forget',component:ForgetComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
