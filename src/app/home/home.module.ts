import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from '../components/message/message.module';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MessageModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
