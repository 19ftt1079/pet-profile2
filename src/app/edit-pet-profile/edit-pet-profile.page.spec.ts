import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditPetProfilePage } from './edit-pet-profile.page';

describe('EditPetProfilePage', () => {
  let component: EditPetProfilePage;
  let fixture: ComponentFixture<EditPetProfilePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPetProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPetProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
