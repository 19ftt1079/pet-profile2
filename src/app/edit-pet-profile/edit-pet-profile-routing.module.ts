import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPetProfilePage } from './edit-pet-profile.page';

const routes: Routes = [
  {
    path: '',
    component: EditPetProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPetProfilePageRoutingModule {}
