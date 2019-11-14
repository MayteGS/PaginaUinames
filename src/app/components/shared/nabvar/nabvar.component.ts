import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public random: boolean =false;
  public male: boolean = false;
  public female: boolean= false;
  public gender:string= null;
  
  public GetGender(value){
    
    this.gender=value
    
    switch(value){

      case "random":{
        this.random = true
        this.male = false
        this.female = false
      }
      case "male":{
        this.male =true
        this.random= false
        this.female=false
        
      }
      case "female":{
        this.female =true
        this.random= false
        this.male=false
      }
    }
    console.log(this.gender);
    

    // if(value=='random')
    
  }

}
