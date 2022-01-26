
import { LightningElement ,track,api} from 'lwc';

export default class Lwc1 extends LightningElement {


    @track    fname ='Siva';
    @api    lname ='p';
    @api    email='ramuleo37@gmail.com';


    
fireevent(event){
     console.log('change 5');
     console.log(this.fname);
  
}

handlechange(e){
    console.log('change 4');
  console.log(e.target.name);
  console.log(e.target.value)
  if(e.target.name == 'fname')
     this.fname =e.target.value;

     if(e.target.name == 'lname')
     this.lname =e.target.value;

     if(e.target.name == 'email')
     this.email =e.target.value;

}

}

