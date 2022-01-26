import { LightningElement,track } from 'lwc';
import createAccount from '@salesforce/apex/accountlwccontroller.createAccount';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountCreation_Apex extends LightningElement {
 @track accountid;
 @track error;
 @track accountRecord = {
    Name:ACCOUNT_NAME,   
    Phone:ACCOUNT_PHONE
 };
 handleNameChange(event){
     this.accountRecord.Name = event.target.value;
 }
 /*handleTypeChange(event){
    this.accountRecord.Type = event.target.value;

 }*/
 handlePhoneChange(event){
    this.accountRecord.Phone = event.target.value;
 }
 handleSaveAccount(){   
     console.log('handle save');
    createAccount({accountRecObj:this.accountRecord})
    .then(result=>{    
        this.accountRecord = {};
        this.accountid = result.Id;
      console.log(this.accountid);
       /* const toastEvent = new ShowToastEvent({
            title:'Success!',
            message:'Account Record is created successfullu!',
            variant:'success'
        });
        this.dispatchEvent(toastEvent);*/
    })
    .catch(error=>{
        console.log(this.error.message);
        this.error = error.message;
    });
 }

}//


