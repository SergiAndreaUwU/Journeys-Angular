import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { state } from '@angular/animations';






@Component({
  selector: 'app-sign-up-component',
  templateUrl: './sign-up-component.component.html',
  styleUrls: ['./sign-up-component.component.css']
})
export class SignUpComponentComponent implements OnInit {

 
  

  states=[]
  userForm: FormGroup;
  validationMessage:string;

  private validationMessages={
    minLength:"can't be less than 3 characters",
    maxLength:"can't be longer than 25 characters",
    required: 'required field'
    
  };
 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({

      firstName: ['', [Validators.maxLength(25), Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.maxLength(25), Validators.minLength(3), Validators.required]],

      dateOfBirth: ['', [Validators.required]],

      // email1: ['', [Validators.required]],
      // email2: ['', [Validators.required]],
      // email: ['', [Validators.email]],

      // email: [this.fb.group({
      //   email1: ['', [Validators.required]],
      //   email2: ['', [Validators.required]],
      // }), [Validators.email]],

      email:this.fb.group({
        email1: ['', [Validators.required]],
         email2: ['', [Validators.required]],
       }),
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      newsletter: false,
      terms: [false, [Validators.required]]


    })
    
    var listOfStates;

    this.userForm.get('email').valueChanges.subscribe(
      val=> console.log(val)
    )
    
    this.userForm.get('country').valueChanges.subscribe(
         (country)=>{
          country=country.toLowerCase();
          console.log(country);
          listOfStates=this.fnCallback(this[country]);
          this.states= listOfStates  ;
      })


    const firstNameValidation=this.userForm.get('firstName');
    firstNameValidation.valueChanges.subscribe(
      value=>this.setMessage(firstNameValidation)
      );
      
    this.userForm.get('state').valueChanges.subscribe(  //no muestra nada en consola
      val=>console.log(val)
      )

  }


  fnCallback(fn){
    return fn();
  }
  mexico(): Array<String> {
    return ["Jalisco", "Michoacan", "Zacatecas", "Coahuila", "Durango", "Colima"]
}
usa(): Array<String> {
  return ["usa1", "usa2"]
}

  save() {
    alert("savexd")
  }
  setMessage(c: AbstractControl): void {
    this.validationMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.validationMessage = Object.keys(c.errors).map(
        key => this.validationMessages[key]).join(' ');
    }
  }
  populateData(): void {
    this.userForm.patchValue({

      firstName: 'Sergio',
      lastName: 'Salazar',
      dateOfBirth:'01/01/98',
      email1: 'sergioSAO5',
      email2: 'hotmail.com',
      email: 'sergioSAO5@hotmail.com',
      country: 'mexico',
      state:  'jalisco',
      terms: true
    })
  }


  
}
