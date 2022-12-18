import {Component,EventEmitter,Output} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`.online:white;`],
})

export class ServerComponent{
   serverStatus='offline';
   @Output() serverCreated = new EventEmitter<{servName:string, serverContent:string}>();
   NewservName='';
   NewServerContent='';
   constructor(){
    this.serverStatus='online';

   }
   getColor(){
    return this.serverStatus === 'online'?'green':'red';
   }
   getServiceStatus(){
    return this.serverStatus;
   }
   onServerAdded(){
    this.serverCreated.emit({servName:this.NewservName, serverContent:this.NewServerContent});
   }
}
