import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles:[`.display:none;`]
})
export class ServersComponent implements OnInit {
   allowServer = false;
   serviceCreated=false;
   serverName='';
   serverStatus='offline';
   servers=['server1','server 2'];
   btnClicked=false;
   

   constructor() {
    this.serverStatus= Math.random()>0.5? 'online':'offline';

      setTimeout(()=>{
        this.allowServer= true;
      },2000);
   }
   oncreateServer(){
    this.serviceCreated=true;
    console.log("server created");
    this.servers.push(this.serverName);
   }
   ngOnInit(): void {

   }
   onUpdateServerNom(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
   }
   onClickToglle(){
   this.btnClicked=true;
   }
   show(){
    this.btnClicked==true? 'block':'none';
   }

}
