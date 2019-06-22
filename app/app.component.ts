import { Component, OnInit } from '@angular/core';
import{FormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetMsgsService} from './services/get-msgs.service';
import { Message} from '../models/Messgae';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./../../node_modules/font-awesome/css/font-awesome.min.css']
})
export class AppComponent implements OnInit {
  textMsg:Message[];
  TestMsg:FormGroup;
  submitted=false;
  msg:String;
  keyword:String[];
  Currency1:String;
  Currency2:String;
  CurrencyConv:String;
  chatlogs:String;
  responseMsg:String;
  constructor(private formBuilder:FormBuilder,private getMsg:GetMsgsService) { //,private getMsg:GetMsgsService
    this.keyword=["EXCHANGE","BUY","YES","THANKS","OK"];
   }

  ngOnInit() {
    this.TestMsg=this.formBuilder.group({
      textmsg:['',[Validators.required,Validators.pattern('^[a-zA-z]+$')]], 
    });
   
  }
  get f(){
    return this.TestMsg.controls;
  }
  onSubmit(textdata,chatlogs){
    this.submitted=true;
    console.log(textdata['textmsg'])
    this.msg=textdata
    //this.msg= textdata.split(" ")
      for(let key in this.keyword){
        if(this.keyword[key].indexOf(textdata['textmsg'].toUpperCase())){
            this.msg=this.keyword[key];
            break;
        }
      }
    console.log(this.msg)
    if(this.msg==="EXCHANGE"){
     // "I want exchange rate between sgd to INR " 
      this.responseMsg="serveer should respond"
      if(textdata['textmsg'].indexOf("SGD and INR")){
         this.CurrencyConv="SGDINR"
      }
      else if(textdata['textmsg'].indexOf("USD and SGD")){
        this.CurrencyConv="USDSGD"
      }
    
       //Call Api
      // reflect msg
      //chatlogs=document.getElementById("chatlogs")

      this.getMsg.getMsgResp(this.CurrencyConv).subscribe((res:Response)=>{
        console.log(res);
        console.log(res["rate"])
        this.Currency1=res["rate"]
        
        
        //alert("Sucess");
       
        if(textdata['textmsg'].indexOf("SGD and INR")){
           this.CurrencyConv="SGDINR" 
           this.chatlogs="<i style='border-radius:4px; margin-bottom: 5%;  padding:2%;'>"+document.getElementById("chatlogs").innerHTML+"</i><br/><i>"+textdata['textmsg']+"</i><br/><i style='color:blue;'>"+"DBSMini: 1SGD is worth "+this.Currency1+" INR </i>";
        }
        else{

        }
        }
    );
        //  if(document.getElementById("chatlogs").innerHTML===''){
        //   document.getElementById("chatlogs").innerHTML=''
        //  }else{
        //   document.getElementById("chatlogs").innerHTML=this.chatlogs+""
        //  }
        document.getElementById("chatlogs").innerHTML=this.chatlogs+""
         console.log(this.chatlogs)
      
      }

      }

  }


