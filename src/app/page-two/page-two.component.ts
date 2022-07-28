import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {interval, Subject} from 'rxjs';
import {debounce, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit, OnDestroy {
  destroySubscription: Subject<any> = new Subject<any>();

  countries: {id: number, text: string, code: string, rate: number}[] = [
    { id: 1, text: 'Hong Kong', code: 'HKD', rate: 1 },
    { id: 2, text: 'USA', code: 'USD', rate: 2 },
    { id: 3, text: 'Australia', code: 'AUD', rate: 3 },
  ];

  packages: {id: number, text: string, percerntage: number, execcamount: number, showAccess: boolean}[] = [
    { id: 1, text: 'Standard', percerntage: 0, execcamount: 0, showAccess: false },
    { id: 2, text: 'Safe', percerntage: 50, execcamount: 0, showAccess: true },
    { id: 3, text: 'Super Safe', percerntage: 75, execcamount: 0, showAccess: true },
  ];

  isError = false;
  errorMessage: any = null;
  quotationForm: FormGroup;
  savedData: any = null;

  constructor(private formbldr: FormBuilder, private router: Router) {
    this.quotationForm = this.formbldr.group({
      name: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      location: new FormControl(null, [Validators.required]),
      package: new FormControl(null, [Validators.required]),
    });

    this.quotationForm.valueChanges.pipe(takeUntil(this.destroySubscription), distinctUntilChanged(), debounce(() => interval(500))).subscribe((tempData: any) => {
      this.submitForm();
    });

    const assignmentSavedData: any = localStorage.getItem('assignmentSavedData');
    if (assignmentSavedData) {
      this.savedData = JSON.parse(assignmentSavedData);
      if (this.savedData) {
        this.quotationForm.get('name')?.patchValue(this.savedData.name);
        this.quotationForm.get('age')?.patchValue(this.savedData.age);
        this.quotationForm.get('location')?.patchValue(this.savedData.location[0].id);
        this.quotationForm.get('package')?.patchValue(this.savedData.package[0].id);
      }

    }

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroySubscription.next();
    this.destroySubscription.complete();
  }

  submitForm(): void {

    if (this.quotationForm.valid) {
      this.errorMessage = null;
      this.save();
    } else {
      // @ts-ignore
      this.errorMessage = (this.quotationForm.get('name').invalid) ? 'Name is required' : (this.quotationForm.get('age').invalid) ? 'Age is required' : (this.quotationForm.get('location').invalid) ? 'Select where do you live?' : (this.quotationForm.get('package').invalid) ? 'Select the package' : '';
    }
  }

  save(): void {
    this.savedData = {
      name: this.quotationForm.value['name'],
      age: this.quotationForm.value['age'],
      location: this.countries.filter((tempData: any) => (Number(tempData.id) == Number(this.quotationForm.value['location']))),
      package: this.packages.filter((tempData: any) => (Number(tempData.id) == Number(this.quotationForm.value['package']))),
      premiumValue: 0
    };

    // @ts-ignore
    const premium = 10 * Number(this.savedData.age) * Number(this.savedData.location[0].rate);
    const premiumSafe = (premium * (50 / 100));
    const premiumSuperSafe = (premium * (75 / 100));

    this.packages[0]['execcamount'] = 0;
    this.packages[1]['execcamount'] = premiumSafe;
    this.packages[2]['execcamount'] = premiumSuperSafe;

    this.savedData['premiumValue'] = premium + this.packages[Number(this.quotationForm.value['package']) - 1]['execcamount'];

  }

  movetonextstep(): void {
    if (this.quotationForm.invalid) {
      // @ts-ignore
      this.errorMessage = 'Complete the form and retry.';
      return;
    }

    if (Number(this.quotationForm.value['age']) > 100) {
      this.isError = true;
    } else {
      localStorage.setItem('assignmentSavedData', JSON.stringify(this.savedData));
      if (this.quotationForm.valid) this.router.navigate(['', 'page3']);
    }

  }

}
