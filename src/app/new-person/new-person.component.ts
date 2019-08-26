import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.scss']
})
export class NewPersonComponent implements OnInit {

  newForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
      private formBuilder: FormBuilder,
      private data: DataService,
      private router: Router
    ) {
    this.newForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      avatar: ['', Validators.required],
      dob: ['', Validators.required],
      country: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;

    if( this.newForm.invalid) {
      return;
    } else {
      this.data.newPerson({
        name: this.newForm.controls.name.value,
        email: this.newForm.controls.email.value,
        avatar: this.newForm.controls.avatar.value,
        dob: this.newForm.controls.dob.value,
        country: this.newForm.controls.country.value,
      }).subscribe(data => {
        this.router.navigateByUrl('')
      })
    }

    this.success = true;
  }

  ngOnInit() {
  }

}
