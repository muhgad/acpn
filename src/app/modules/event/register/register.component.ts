import {
  Component,
  OnInit,
  Input,
  AfterContentChecked,
  NgModule,
  Inject,
} from '@angular/core';
import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig,
} from '@angular/material/dialog';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

// import { render } from 'creditcardpayments/creditCardPayments';
// Dealog
export interface DialogData {
  coupon: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, AfterContentChecked {
  @Input() conference: any;

  conference_id: string = env.selectedEvent;
  countries: any;
  specialties: any;
  cities: any;
  // selectedCountry: String;
  result: any;

  packages: any;
  workshops: any;
  workshops_num = 0;
  package_id: any;
  // workshop_ids: any;
  currency: string = '';

  regName = '';
  regPrice: any = 0;
  subTotal: any = 0;
  total: number = 0;
  workshop_ids = [];

  coupon: number = 0;
  discount = 0;

  constructor(
    private apiServerice: ApiService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.package_id = null;
  }

 

  openDialog() {
    const dialogRef = this.dialog.open(DialogCoupon, {
      // width: '250px',
      data: { coupon: null },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      this.getCoupon(result);
      // this.coupon = result;
    });
  }
  getCoupon(code: string) {
    // console.log('Besm allah ', country_id);
    // console.log(`conferences/${this.conference.id}`);
    var result: any;
    if (code != '') {
      this.apiServerice
        .doGet(`coupons/${this.conference_id}/${code}`)
        .subscribe((res) => {
          result = res;
          if (result.status == 'success') {
            this.discount = result.discount;
            this.calc();
            console.log('the coupon is valid');
            console.log('coupon=', this.coupon);
            this.coupon = 1;
          } else {
            this.coupon = -1;
            this.discount = 0;
            console.log('coupon not valid');
          }
        });
    }
  }
  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked');
    this.selectPackage();
  }
  ngOnInit(): void {
    this.getConference();
    this.getCountry();
    this.getSpecialty();
  }

  workshop_has(value: string) {
    for (var i = 0; i < this.workshop_ids.length; i++) {
      if (this.workshop_ids[i] == value) {
        return true;
      }
    }
    return false;
  }

  changeWorkshop(event: any) {
    // console.log('event:', event.target.checked);
    // console.log('event:', event.target.value);
    if (event.target.checked) {
      if (!this.workshop_has(event.target.value)) {
        this.workshop_ids.push(event.target.value as never);
      }
    } else {
      if (this.workshop_has(event.target.value)) {
        //  this.workshop_ids
        let j = this.workshop_ids.indexOf(event.target.value as never, 0);

        if (j > -1) this.workshop_ids.splice(j, 1);
      }
    }
    console.log('workshop_ids', this.workshop_ids);
  }
  selectPackage(): void {
    // console.log('selectPackage');
    // selectPackage(event: any) {
    //update the ui
    //     alert(event.target.value);
    // console.log('event',event);

    // this.package_id = event.target.value;
    // console.log('package_id', this.package_id);
    if (this.packages == null) return;
    let index = 0;

    for (let i = 0; i < this.packages.length; i++) {
      if (this.packages[i].id == this.package_id) {
        index = i;
        break;
      }
    }
    this.regName = this.packages[index].name;
    this.regPrice = this.packages[index].fees;
    this.calc();
  }

  calc() {
    var discountAmount = this.regPrice * this.discount;
var sumWorkshop= 0;
  for(var i = 0 ;i<this.workshops.length; i++){
    if (this.workshop_has(this.workshops[i].id)) {
      sumWorkshop+= parseInt(this.workshops[i].fees)||0;
    }
    
   }
    
   
    this.subTotal = this.regPrice - discountAmount + sumWorkshop;
    this.total = parseInt(this.subTotal) * 0.03 + parseInt(this.subTotal); //
  }
  onSummit(form: any) {
    if (form.value.mail_list) form.value.mail_list = 'Yes';
    else form.value.mail_list = 'No';

    form.value.workshop_ids = JSON.stringify(this.workshop_ids);
    form.value.package_id = this.package_id;
    form.value.total = this.total;
    // console.log('form.value.workshop_ids gad', form.value.workshop_ids);
    // form.patchValue({ rule_id: 1, conference_id: 1 });
    // console.log('form.value', form.value);
    // return;
    if (form.valid) {
      // console.log('link', `conferences/${env.selectedEvent}/register`);
      this.apiServerice
        .doPost(`conferences/${env.selectedEvent}/register`, form.value)
        .subscribe((res) => {
          // console.log('Besm allah Alrahman');
          console.log('doPost', res);
          this.result = res;
          if (this.result.status == 'success') {
            if (this.total == 0) {
              this.router.navigateByUrl(`registersuccess`);
            } else {
              var user_id = this.result.user_id;
              this.router.navigateByUrl(`checkout/${user_id}`);
              form.reset();
            }
          }
        });
    } else {
      alert('Form not valid');
    }
  }
  getCountry() {
    // console.log('Besm allah ');
    // console.log(`conferences/${this.conference.id}`);
    this.apiServerice.doGet(`country`).subscribe((res) => {
      // console.log('Besm allah Alrahman');
      // console.log('getCountry', res);
      this.countries = res;
    });
  }
  getCity(country_id: string) {
    // console.log('Besm allah ', country_id);
    // console.log(`conferences/${this.conference.id}`);
    if (country_id == '') {
      this.cities = [];
      return;
    }
    this.apiServerice.doGet(`city/${country_id}`).subscribe((res) => {
      // console.log('Besm allah Alrahman');
      // console.log('getCountry', res);
      this.cities = res;
    });
  }

  getSpecialty() {
    // console.log('Besm allah ');
    // console.log(`conferences/${this.conference.id}`);
    this.apiServerice.doGet(`specialties`).subscribe((res) => {
      // console.log('Besm allah Alrahman');
      // console.log('getSpecialty', res);
      this.specialties = res;
    });
  }
  getConference() {
    this.apiServerice
      .doGet(`conferences/${env.selectedEvent}`)
      .subscribe((res) => {
        // console.log('res', res);
        this.conference = res;
        this.currency = this.conference.currency;
        this.packages = this.conference.packages;
        this.workshops = this.conference.workshops;
        this.workshops_num = this.conference.workshops.length;
        if (this.conference.packages.length > 0) {
          this.package_id = this.conference.packages[0].id;
        }
      });
  }
} /*  */

@Component({
  selector: 'dialog-coupon',
  templateUrl: './dialog-coupon.html',
})
export class DialogCoupon {
  code: number = 0;
  constructor(
    public dialogRef: MatDialogRef<DialogCoupon>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  apply(): void {
    console.log('value is', this.data.coupon);
    this.dialogRef.close('sds');
  }
}
