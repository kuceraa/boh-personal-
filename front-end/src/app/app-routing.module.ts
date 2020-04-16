import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { MainScreenComponent } from '../app/main-screen/main-screen.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: MainScreenComponent }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
