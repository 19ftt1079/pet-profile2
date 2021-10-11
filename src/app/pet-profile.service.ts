
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { EditPetProfilePage } from './edit-pet-profile/edit-pet-profile.page';

@Injectable({
  providedIn: 'root'
})
export class PetProfileService {

  constructor(public firestore: AngularFirestore,
    private router: Router) { }


//Update Pet profile info
updateProfile(idNumber,newPetProfile){
this.firestore.collection('newPetProfile').doc(idNumber).update('newPetProfile')

.then (() =>{
  this.router.navigate(['pet-profile/edit-pet-profile',idNumber]);
}).catch(error => console.log(error));
};


}
