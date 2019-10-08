import { Component, OnInit, ViewChild } from '@angular/core';
import { Details} from './details';
import { RegisterService } from './register.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exForm';
  public countries = ["America", "India", "England" , "Africa"];
  public phoneRegex = "^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$";
  public emailRegex = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
  public nameRegex = "^[a-zA-Z \s]+$";
  selectedNone =true;
  errorMsg='';

  

  regModel = new Details('','',null,'default','male', undefined);

  constructor(private _registerService : RegisterService){}

  validateSelect(value){
    if(value === 'default'){
      return this.selectedNone = true;
    }
    else{
      return this.selectedNone =false;
    }
  }

  onSubmit(myForm : NgForm){
    this._registerService.postDetails(this.regModel).subscribe((response) =>{

      // console.log(myForm.controls['name'].value); //to print form values
      alert("Submitted!");
      myForm.reset();  
    },error => this.errorMsg = error.statusText);
  }
ngOnInit(){
}

}
