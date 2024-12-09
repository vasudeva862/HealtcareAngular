import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import{UserManagementServices} from '../Services/user-management.service';

@Component({
    selector:'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls:['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

    RecordId!:number;
    UserDetailsForm!: FormGroup;
    userData!:any;
    isEditClicked!: boolean;
    constructor(private rout:Router, private fb:FormBuilder, private userService:UserManagementServices){}
     
    ngOnInit(): void {
        this.UserDetailsForm=this.fb.group(
            {
                FirstName: ['', Validators.required],
                LastName : ['', Validators.required],
                Mobile : ['', Validators.required],
                
                DateOfBirth : ['', Validators.required],
                Email : ['', Validators.required],
                Role : ['', Validators.required],
                Password : ['', Validators.required],
            }
        )
        this.getUsers();
    
    }

    
    
    navigateToLogin(){
        this.rout.navigate(['./login'])
    }
    uniqueId(){
        var unique=new Date().getTime();
        console.log(unique as number)
    }
    clearForm(){
        this.UserDetailsForm.reset();
    }
    addButton(){
        this.isEditClicked=false;
    }
    addUsers(){
        if(this.UserDetailsForm.valid){
            this.saveUser();
        }
        else{
            this.validateAllFormFields(this.UserDetailsForm);
        }
    }
    private validateAllFormFields(formgroup : FormGroup){
        Object.keys(formgroup.controls).forEach(field=>{
            const control=formgroup.get(field);
            if(control instanceof FormControl){
                control.markAsTouched({onlySelf:true});
            }
            else if(control instanceof FormGroup){
                this.validateAllFormFields(control)
            }

        })

    }

    saveUser(){
        const userDetails={
            RecordId:this.RecordId,
            FirstName:this.UserDetailsForm.controls['FirstName'].value,
            LastName:this.UserDetailsForm.controls['LastName'].value,
            Emailaddress:this.UserDetailsForm.controls['Email'].value,
            MobileNumber:this.UserDetailsForm.controls['Mobile'].value,
            DateOfBirth:this.UserDetailsForm.controls['DateOfBirth'].value,
            Role:this.UserDetailsForm.controls['Role'].value,
            Password:this.UserDetailsForm.controls['Password'].value


        }
        this.userService.saveUsersDetails(userDetails).subscribe(res=>{
            alert('Addded successfully');
            let ref=document.getElementById('cancel')
            ref?.click();
            this.UserDetailsForm.reset();
            this.getUsers();
        });
    }

    
    getUsers(){
        this.userService.getUserDetails().subscribe(res=>{
            this.userData=res;
            

        })
    }
    
    
    editUsers(row:any){
        this.isEditClicked=true;
        this.RecordId=row.recordId;
        this.UserDetailsForm.controls['FirstName'].setValue(row.firstname);
        this.UserDetailsForm.controls['LastName'].setValue(row.lastname);
        this.UserDetailsForm.controls['Email'].setValue(row.emailaddress);
        this.UserDetailsForm.controls['Mobile'].setValue(row.mobilenumber);
        this.UserDetailsForm.controls['DateOfBirth'].setValue(row.dateOfBirth);
        this.UserDetailsForm.controls['Role'].setValue(row.role);
        this.UserDetailsForm.controls['Password'].setValue(row.password);
    }
    updateOrders(){
        if(this.UserDetailsForm.valid){
            const userDetails={
                RecordId : this.RecordId,
                Firstname:this.UserDetailsForm.controls['FirstName'].value,
                LastName:this.UserDetailsForm.controls['LastName'].value,
                Emailaddress:this.UserDetailsForm.controls['Email'].value,
                MobileNumber:this.UserDetailsForm.controls['Mobile'].value,
                DateOfBirths:this.UserDetailsForm.controls['DateOfBirth'].value,
                Role:this.UserDetailsForm.controls['Role'].value,
                Password:this.UserDetailsForm.controls['Password'].value,

            }
            this.userService.updateUserDetails(userDetails,this.RecordId).subscribe(res=>{
                alert('Update Successfully');
                let ref=document.getElementById('cancel')
                ref?.click();
                this.UserDetailsForm.reset();
                this.getUsers();
            });
        }
        else{
            this.validateAllFormFields(this.UserDetailsForm);
        }
    }
    ReturnToHome(){
        this.rout.navigate(['./home']);
    }
}