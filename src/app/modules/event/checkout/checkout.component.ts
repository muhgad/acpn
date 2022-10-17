import { Component, OnInit, ElementRef, ViewChild ,Inject} from '@angular/core';
import { ApiService } from 'app/core/http/api.service';
import { environment as env } from '@env/environment';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

declare var paypal: any;
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig,
} from '@angular/material/dialog';
export interface DialogData {
  coupon: string;
}

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  @ViewChild('paypal', { static: true })
  paypalElement!: ElementRef;

  // @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  user_id: string = '';
  conference_id: string = env.selectedEvent;
  result: any;

  currency: string = '';

  regName = '';
  regPrice: any = 0;
  workshops: any;
  subTotal: any = 0;
  total: number = 0;

  // result: any;
  // paidFor = false;

  coupon: number = 0;
  discount = 0;

  constructor(
    private apiServerice: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.user_id = this.activatedRoute.snapshot.paramMap.get('user_id') ?? '';
  }
  // test() {
  //   // let params = new HttpParams().set('aaa', 'A');

  //   // var formData: any = new FormData();
  //   var formData = new HttpParams()
  //     .set('user_id', this.user_id)
  //     .set('conference_id', this.conference_id)
  //     .set('pal_id', 'ididididi')
  //     .set('pal_intent', 'intent')
  //     .set('pal_status', 'status')
  //     .set('pal_time', '2021-12-06 07:38:16')
  //     .set('pal_amount', '100.53')
  //     .set('pal_currency', 'USD')
  //     .set('pal_description', 'Desc')
  //     .set('pal_email', 'atefgad303@gmail.com');

  //   this.apiServerice.doPost(`order`, formData).subscribe((res) => {
  //     // console.log('Besm allah Alrahman');
  //     // console.log('doPost order', res);

  //     this.result = res;
  //     if (this.result.status == 'success') {
  //       this.router.navigateByUrl(`registersuccess`);
  //     } else {
  //       console.log('Error in payment');
  //     }
  //   });
  // }
  order(order: any) {
    console.log('pal_amount', order.purchase_units[0].amount.value);
    console.log('pal_currency', order.purchase_units[0].amount.currency_code);
    console.log('pal_description', order.purchase_units[0].description);

    var formData = new HttpParams()
      .set('user_id', this.user_id)
      .set('conference_id', this.conference_id)
      .set('pal_id', order.id)
      .set('pal_intent', order.intent)
      .set('pal_status', order.status)
      .set('pal_time', order.create_time)
      .set('pal_amount', order.purchase_units[0].amount.value)
      .set('pal_currency', order.purchase_units[0].amount.currency_code)
      .set('pal_description', order.purchase_units[0].description)
      .set('pal_email', order.payer.email_address);

    this.apiServerice.doPost(`order`, formData).subscribe((res) => {
      // console.log('Besm allah Alrahman');
      console.log('doPost', res);

      this.result = res;
      if (this.result.status == 'success') {
        this.router.navigateByUrl(`registersuccess`);
      } else {
        console.log('Error in payment');
      }
    });
  }
  ngOnInit(): void {
    this.getAttendee();
    paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                description: `confernce: ${env.con_name}\n package: ${this.regName}`,
                amount: {
                  currency_code: this.currency,
                  value: this.total,
                },
              },
            ],
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          // this.paidFor = true;
          console.log(order);
          this.order(order);
        },
        onError: (err: any) => {
          console.log(err);
        },
      })
      .render(this.paypalElement.nativeElement);
  }

  getAttendee() {
    this.apiServerice
      .doGet(`conferences/${env.selectedEvent}/user/${this.user_id}`)
      .subscribe((res) => {
        console.log('res', res);
        // this.test();
        this.result = res;

        this.currency = this.result.attendee.currency;

        this.regName = this.result.attendee.package_name;
        this.regPrice = this.result.attendee.package_fees;
        this.workshops = this.result.attendee.workshops;
        // if (this.conference.packages.length > 0) {
        //   this.package_id = this.conference.packages[0].id;
        // }
        this.calc();
      });
  }

  calc_old() {
    this.subTotal = this.regPrice;
    this.total = parseInt(this.subTotal) * 0.03 + parseInt(this.subTotal); //
  }
  calc() {
    var discountAmount = this.regPrice * this.discount;
var sumWorkshop= 0;
  for(var i = 0 ;i<this.workshops.length; i++){
   
      sumWorkshop+= parseInt(this.workshops[i].fees)||0;

    
   }
    
   
    this.subTotal = this.regPrice - discountAmount + sumWorkshop;
    this.total = parseInt(this.subTotal) * 0.03 + parseInt(this.subTotal); //
  }

  openDialog() {
    const dialogRef = this.dialog.open(CheckoutCoupon, {
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
            
            // console.log('the coupon is valid');
            // console.log('coupon=', this.coupon);
            this.coupon = 1;
          }else {
            this.coupon = -1;
            this.discount = 0;
            // console.log('coupon not valid');
          }
          this.calc();
        });
    }
  }

}

@Component({
  selector: 'checkout-coupon',
  templateUrl: './checkout-coupon.html',
})
export class CheckoutCoupon {
  code: number = 0;
  constructor(
    public dialogRef: MatDialogRef<CheckoutCoupon>,
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
