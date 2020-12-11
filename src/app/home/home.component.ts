import { Component, OnInit } from '@angular/core';

async function escribiendo(){
  let i=0
  let cadena="abcde";
while(i<cadena.length){
await  new Promise((res)=>{setTimeout(()=>{
  this.cadenaInversa+=cadena.charAt(i)
  i++;
},1000)})
}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  
  constructor() { }
  cadenaInversa:string;
  
  
  ngOnInit(): void {
    this.cadenaInversa=""
    
    
    
    escribiendo()
    
   
  }



}
