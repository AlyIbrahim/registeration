import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { RegisterationService } from '../registeration.service';

@Component({
  selector: 'app-v1',
  templateUrl: './v1.component.html',
  styleUrls: ['./v1.component.sass']
})
export class V1Component implements OnInit {

  firstName = "Aly";
  lastName = "Ibrahim";
  title = "Solutions Architect";
  registerationForm;

  constructor(private formBuilder: FormBuilder , private regService: RegisterationService) { 
    this.registerationForm = this.formBuilder.group({
      firstname: '',
      lastname: '',
      title: ''
    });

  }

  onSubmit(userData){
    console.log('Registeration has been sent ', userData);
    this.regService.send(userData).subscribe();
    this.registerationForm.reset();
  }

  ngOnInit(): void {
  }

}
