import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Banner } from 'src/app/sherad/models/banner.model';
import { BannerInterfaces } from 'src/app/sherad/interfaces/interfaces';
import { BannerService } from 'src/app/services/banner.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-banner-form',
  templateUrl: './banner-form.component.html',
  styleUrls: ['./banner-form.component.scss']
})
export class BannerFormComponent implements OnInit {

  @Input() dataToForm: BannerInterfaces;
  public formBanner: FormGroup;
  public characterLimit = 10;

  constructor(private formBuilder: FormBuilder,
              private bannerService: BannerService) { }

  ngOnInit() {
    this.formBanner = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, [Validators.minLength(10), Validators.maxLength(150), Validators.required]]
    });
  }

  onSubmit() {

    this.bannerService.create(this.formBanner.value)
      .subscribe((response) => {
        this.formBanner.reset();
      },
      (error: any) => alert('erro'));

    // if (this.dataToForm) {
    //   this.bannerService.update(this.formBanner.value, this.dataToForm._id).subscribe((response) => {
    //   });
    // } else {
    //   this.bannerService.create(this.formBanner.value).subscribe((response) => {
    //     this.list();
    //     this.formBanner.reset();
    //   });
    // }
  }

  verificaValidTouched(campo) {
    return !this.formBanner.get(campo).valid && this.formBanner.get(campo).touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  mostraFeedBack(campo) {
    return !this.formBanner.get(campo).valid && this.formBanner.get(campo).touched;
  }

  bannerById(id: string) {
    return new Promise((resolve, reject) => {
      this.bannerService.byId(id).subscribe((response) => {
        resolve(response);
      });
    });
  }
  update(id: string) {
    return this.bannerService.update(this.formBanner.value, id).subscribe((response) => {
      // this.list();
    });
  }
  mountForm(dataToForm?: BannerInterfaces) {

    if (this.dataToForm) {
      this.bannerById(this.dataToForm._id)
        .then((result: BannerInterfaces) => {
          this.formBanner = this.formBuilder.group({
            title: result.title,
            description: result.description
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.formBanner = this.formBuilder.group({
        title: [null],
        description: [null]
      });
    }

  }
}
