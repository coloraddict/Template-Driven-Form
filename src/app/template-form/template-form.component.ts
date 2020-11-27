import { Component, OnInit, ViewChild } from '@angular/core';


class Signup {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public email: string = '',
    public password: string = '',
    public language: string = '')
    {}
}

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  model: Signup = new Signup();
  langs:string[] = ['English', 'French', 'German'];

  @ViewChild('f') form: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.model);    
    // if(this.form.valid) {
    //   this.form.reset();
    // }
  }

}
