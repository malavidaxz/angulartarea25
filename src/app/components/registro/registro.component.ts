import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutorizarService } from 'src/app/services/autorizar.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public formRegistro !: FormGroup;
  constructor( private userService:AutorizarService, private router:Router, private formBuilder:FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.formRegistro = this.formBuilder.group({
      email:['',[
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
      ]] ,
      password:['',[
        Validators.required,
        Validators.minLength(8)
      ]]
    })
  }

  onSubmit(){

    this.userService.registrar(this.formRegistro.value)
    .then( response => {
      console.log(response)
      this.router.navigate(['/login']);
    })
    .catch( error => console.log(error));

  }

}
