import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThreeComponent } from './page-three.component';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterModule} from '@angular/router';
import {PageOneComponent} from '../page-one/page-one.component';
import {PageTwoComponent} from '../page-two/page-two.component';

describe('PageThreeComponent', () => {
  let component: PageThreeComponent;
  let fixture: ComponentFixture<PageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [{path: 'page2', component: PageTwoComponent}]
        )
      ],
      declarations: [ PageThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(PageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should values set', () => {
    const hostElement = fixture.nativeElement;

    const name: HTMLElement = hostElement.querySelector('#name');
    const age: HTMLElement = hostElement.querySelector('#age');
    const location: HTMLElement = hostElement.querySelector('#location');
    const spackage: HTMLElement = hostElement.querySelector('#package');
    const premiumVal: HTMLElement = hostElement.querySelector('#premiumVal');
    const currType: HTMLElement = hostElement.querySelector('#surrtype');

    fixture.detectChanges();

    name.textContent = 'name';
    age.textContent = '50';
    location.textContent = 'Hong Kong';
    spackage.textContent = '';
    premiumVal.textContent = '500';
    currType.textContent = 'HKD';


  });
});
