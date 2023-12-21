import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardFrontComponent } from './card-front/card-front.component';
import { CardBackComponent } from './card-back/card-back.component';
import { CardEditComponent } from './card-edit/card-edit.component';

const routes: Routes = [
  { path: "front", component: CardFrontComponent },
  { path: "back", component: CardBackComponent },
  { path: "edit", component: CardEditComponent },
  { path: " ", redirectTo: "edit", pathMatch: 'full' },
  { path: "**", component: CardEditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
