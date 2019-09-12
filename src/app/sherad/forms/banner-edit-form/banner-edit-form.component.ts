import { Component, OnInit, Input } from '@angular/core';
import { BannerInterfaces } from '../../interfaces/interfaces';

@Component({
  selector: 'app-banner-edit-form',
  templateUrl: './banner-edit-form.component.html',
  styleUrls: ['./banner-edit-form.component.sass']
})
export class BannerEditFormComponent implements OnInit {

  @Input() dataToForm: BannerInterfaces;

  constructor() { }

  ngOnInit() {
    console.log('>>', this.dataToForm);

  }

}
