import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.scss']
})
export class NewPersonComponent implements OnInit {

  newForm: FormGroup;
  submitted = false;
  success = false;
  createState = true;

  constructor(
      private formBuilder: FormBuilder,
      private data: DataService,
      private router: Router,
      private route: ActivatedRoute
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
    this.route.paramMap.subscribe(paramMap => {
      let person = paramMap['params'];
      if(person.id) {
        this.createState = false;
        this.newForm.controls.name.setValue(person.name);
        this.newForm.controls.email.setValue(person.email);
        this.newForm.controls.avatar.setValue(person.avatar);
        this.newForm.controls.dob.setValue(person.dob);
        this.newForm.controls.country.setValue(person.country);
      }
    })
  }

}
