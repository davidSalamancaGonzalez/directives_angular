import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  color : string = 'red'
  text  : string = 'Please insert your name'

  miForm : FormGroup = this.formbuilder.group({
    name : ['', Validators.required]
  });

  constructor( private formbuilder : FormBuilder ) { }

  ngOnInit(): void {
  }

  hasError( field : string ) :boolean{
    return this.miForm.get(field)?.invalid || false;
  }

  changeColor(){
  const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
  this.color = color;
  }

  changeName(){
    this.text =  Math.random().toString()
  }

}
