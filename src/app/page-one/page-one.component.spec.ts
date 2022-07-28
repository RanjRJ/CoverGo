import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { PageOneComponent } from './page-one.component';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterModule} from '@angular/router';
import {By} from '@angular/platform-browser';
import {PageTwoComponent} from '../page-two/page-two.component';

describe('PageOneComponent', () => {
  let component: PageOneComponent;
  let fixture: ComponentFixture<PageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [{path: 'page2', component: PageTwoComponent}]
        )
      ],
      declarations: [ PageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component one', () => {
    fixture = TestBed.createComponent(PageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should contain header Hello There !', () => {
    const ficture = TestBed.createComponent(PageOneComponent);
    ficture.detectChanges();

    const nativeelmnt = ficture.nativeElement;
    expect(nativeelmnt.querySelector('.hello-text').textContent).toEqual('Hello There !');
  });

  it('should contain description "Let\'s buy some insurance. It is going to take only a few steps"', () => {
    const ficture = TestBed.createComponent(PageOneComponent);
    ficture.detectChanges();

    const nativeelmnt = ficture.nativeElement;
    expect(nativeelmnt.querySelector('.description').textContent).toEqual("Let's buy some insurance. It is going to take only a few steps");
  });

  it('should contain button with "Start" text', () => {
    const ficture = TestBed.createComponent(PageOneComponent);
    ficture.detectChanges();

    const nativeelmnt = ficture.nativeElement;
    expect(nativeelmnt.querySelector('.startBtn').textContent).toEqual("Start");
  });

  it('should click start button', () => {
    const link = fixture.debugElement.nativeElement.querySelector(".startBtn");
    link.click();
  });




});
