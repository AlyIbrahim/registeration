import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { RegisterationService } from '../registeration.service';

@Component({
  selector: 'app-v2',
  templateUrl: './v2.component.html',
  styleUrls: ['./v2.component.sass']
})
export class V2Component implements OnInit {

  registerationForm;

  constructor(private formBuilder: FormBuilder , private regService: RegisterationService) { 
    this.registerationForm = this.formBuilder.group({
      firstname: '',
      lastname: '',
      title: '',
      email: '',
      company: ''
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
