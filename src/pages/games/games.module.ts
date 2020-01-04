import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class GamesModule { }
