import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { PageTwoComponent } from './page-two.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {PageThreeComponent} from '../page-three/page-three.component';
import {PageOneComponent} from '../page-one/page-one.component';

describe('PageTwoComponent', () => {
  let component: PageTwoComponent;
  let fixture: ComponentFixture<PageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTwoComponent ],
      imports: [
        RouterTestingModule.withRoutes(
          [{path: 'page3', component: PageThreeComponent}, {path: '', component: PageOneComponent}]
        ),
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(PageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should contain fill inputs', () => {
    const hostElement = fixture.nativeElement;
    const firstnameInput: HTMLInputElement = hostElement.querySelector('#name');
    const ageInput: HTMLInputElement = hostElement.querySelector('#age');
    const locationInput: HTMLSelectElement = hostElement.querySelector('#location');
    const packageInput: HTMLInputElement = hostElement.querySelector('#packagetype_1');
    const premiumVal: HTMLElement = hostElement.querySelector('#premiumVal');
    const currType: HTMLElement = hostElement.querySelector('#currencyType');

    firstnameInput.value = 'name';
    ageInput.value = '50';
    locationInput.value = locationInput.options[0].value;
    packageInput.checked = true;

    firstnameInput.dispatchEvent(new Event('input'));
    ageInput.dispatchEvent(new Event('input'));
    locationInput.dispatchEvent(new Event('change'));
    packageInput.dispatchEvent(new Event('change'));



    fixture.detectChanges();
    // @ts-ignore
    expect(component.quotationForm.get('name').value).toBe('name');
    // @ts-ignore
    expect(component.quotationForm.get('age').value).toBe(50);
    // @ts-ignore
    expect(component.quotationForm.get('location').value).toBe('1');
    // @ts-ignore
    expect(component.quotationForm.get('package').value).toBe(1);

    expect(component.quotationForm.invalid).toBe(false);
    // spyOn(component, 'save').and.callThrough();
    // spyOn(component, 'submitForm');
    // spyOn(component, 'save');
    // tick(100)
    // component.submitForm();
    // component.save();
    // fixture.detectChanges();
    // @ts-ignore
    // console.log(component);
    // expect(component.savedData.premiumValue).toBe(500);

    premiumVal.textContent = '500';
    currType.textContent = 'HKD';


  });

});
