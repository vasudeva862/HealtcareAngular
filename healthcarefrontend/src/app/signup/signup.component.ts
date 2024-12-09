import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserManagementServices } from "../Services/user-management.service";

@Component({
    selector:'app-signup',
    templateUrl:'./signup.component.html',
    styleUrls:['./signup.component.css']
})
export class SignupComponent implements OnInit{
    signupform!: FormGroup;
    constructor(private rout : Router, private fb : FormBuilder , private userService : UserManagementServices){}

    ngOnInit(): void{
        this.signupform=this.fb.group(
            {
                FirstName : ['', Validators.required],
                LastName : ['', Validators.required],
                Mobile : ['', Validators.required],
                DateOfBirth : ['', Validators.required],
                Email : ['', Validators.required],
                Role : ['', Validators.required],
                Password : ['', Validators.required],

            }
        )
    }
    navigateToLogin(){
        this.rout.navigate(['./login'])
    }
    validateSignUp(){
        if(this.signupform.valid){
            this.saveUser();
        }
        else{
            this.validateAllFormFields(this.signupform);
        }
        

    }
    private validateAllFormFields(formgroup : FormGroup){
        Object.keys(formgroup.controls).forEach(field=>{
            const control =formgroup.get(field);
            if(control instanceof FormControl){
                control.markAsTouched({onlySelf:true});
            }
            else if(control instanceof FormGroup){
                this.validateAllFormFields(control)
            
            
            }
        })
    }
    saveUser(){
        let RecordId=13;
        const userDetails={
            RecordId:RecordId,
            Firstname:this.signupform.controls['FirstName'].value,
            Lastname:this.signupform.controls['LastName'].value,
            Emailaddress:this.signupform.controls['Email'].value,
            MobileNumber:this.signupform.controls['Mobile'].value,
            DateOfBirth:this.signupform.controls['DateOfBirth'].value,
            Role:this.signupform.controls['Role'].value,
            Password:this.signupform.controls['Password'].value

        }
        this.userService.saveUsersDetails(userDetails).subscribe( res => {
            RecordId+=1;
            alert('Saved success');
        });
    }
    reset(){
        this.signupform.reset();
    }
}
