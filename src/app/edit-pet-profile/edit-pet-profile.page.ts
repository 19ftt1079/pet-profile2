import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { PetProfileService } from '../pet-profile.service';

import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-pet-profile',
  templateUrl: './edit-pet-profile.page.html',
  styleUrls: ['./edit-pet-profile.page.scss'],
})
export class EditPetProfilePage implements OnInit {

  newPetProfile: FormGroup;
  value: any;

  newpetDetails ={
  idNumber:'',
   image: null,
   petName:'',
   gender:'',
   breed:'',
   petDate:'',
   time: new Date().getTime,
   date: new Date().toDateString,
   adminApprove: 'Pending'
  };


  constructor(
    private router: Router,
    private firebaseData: AngularFirestore,
    private editService: PetProfileService,
  ) {
  }

  ngOnInit() {
    this.newPetProfile= new FormGroup({
      idNumber: new FormControl(this.newpetDetails.idNumber,[
        Validators.required,
    ]),
       image:new FormControl(this.newpetDetails.image,[
         Validators.required,
       ]),
       petName: new FormControl(this.newpetDetails.petName,[
         Validators.required,
        ]),
        gender: new FormControl(this.newpetDetails.gender,[
          Validators.required,
        ]),
        breed: new FormControl(this.newpetDetails.breed,[
          Validators.required,
        ]),
        petDate: new FormControl(this.newpetDetails.petDate,[
          Validators.required,
        ])

    });
  }

// Create Pet-Profile
confirm(): void{
  this.newpetDetails.idNumber= this.firebaseData.createId();
  this.newpetDetails.image= this.newPetProfile.get('image').value;
  this.newpetDetails.petName= this.newPetProfile.get('petName').value;
  this.newpetDetails.gender= this.newPetProfile.get('gender').value;
  this.newpetDetails.breed=this.newPetProfile.get('breed').value;
  this.newpetDetails.petDate=this.newPetProfile.get('petDate').value;

this.firebaseData.collection('newPetProfile').doc(this.newpetDetails.idNumber).set(this.newpetDetails
).then(() =>{
 this.newPetProfile= null;// Clears all input
 this.router.navigateByUrl('/home');// Direct to pet display
 console.log('Added new pet info!');// Message
});


}
//Update Pet-Profile
updateDetails(): void{
  this.newpetDetails.idNumber= this.firebaseData.createId();
  this.newpetDetails.image= this.newPetProfile.get('image').value;
  this.newpetDetails.petName= this.newPetProfile.get('petName').value;
  this.newpetDetails.gender= this.newPetProfile.get('gender').value;
  this.newpetDetails.breed=this.newPetProfile.get('breed').value;
  this.newpetDetails.petDate=this.newPetProfile.get('petDate').value;


}





}
