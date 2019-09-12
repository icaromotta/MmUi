import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BannerService } from 'src/app/services/banner.service';
import { Observable } from 'rxjs';
import { Banner } from 'src/app/sherad/models/banner.model';
import { BannerInterfaces } from 'src/app/sherad/interfaces/interfaces';

@Component({
  selector: 'app-banner-creator',
  templateUrl: './banner-creator.component.html',
  styleUrls: ['./banner-creator.component.scss'],
  animations: [
    trigger('childAnimation', [
      state('open', style({
        width: '100%',
        height: 'auto',
        opacity: 1
      })),
      state('closed', style({
        display: 'none',
      })),
      transition('open => closed', [
        animate('0.2s ease')
      ])
    ]),
  ],
})
export class BannerCreatorComponent implements OnInit {

  isDisabled = false;
  isOpen = false;

  // banners: Banner[];
  banners$: Observable<Banner[]>;

  edit = false;
  currentId: string;

  constructor(private fb: FormBuilder,
              private bannerService: BannerService) { }

  ngOnInit() {
    this.banners$ = this.bannerService.list();
  }

  callEdit(id: string): void {
    this.currentId = id;
    this.edit = !this.edit;
  }

  toggleAnimations() {
    this.isDisabled = !this.isDisabled;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  listAll() {
    // this.bannerService.list()
    //   .subscribe((response: any) => {
    //     this.banners = response;
    //   });
  }

  delete(id: string) {
    return this.bannerService.delete(id).subscribe((response) => {
      this.listAll();
    });
  }
}
