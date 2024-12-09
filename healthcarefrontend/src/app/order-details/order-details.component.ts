import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import{UserManagementServices} from '../Services/user-management.service';
import { NgFor } from "@angular/common";

@Component({
    selector:'app-order-details',
    templateUrl: './order-details.component.html',
    styleUrls:['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{
    RecordId!:number;
    orderDetailsForm!: FormGroup;
    orderData!:any;
    categories:any;
    isEditClicked!: boolean;
    constructor(private rout:Router, private fb:FormBuilder, private userService:UserManagementServices){}
     
    ngOnInit(): void {
        this.orderDetailsForm=this.fb.group(
            {
                LabName: ['', Validators.required],
                UserFirstName : ['', Validators.required],
                UserLastName : ['', Validators.required],
                Status : ['', Validators.required],
                DateOfBirth : ['', Validators.required],
                Category : ['', Validators.required],
                OrderedDate : ['', Validators.required],
                DoctorPrescription : ['', Validators.required],
            }
        )
        this.getOrders();
        this.getCategory();
    }
    navigateToLogin(){
        this.rout.navigate(['.login'])
    }
    clearForm(){
        this.orderDetailsForm.reset();
    }
    addOrders(){
        if(this.orderDetailsForm.valid){
            this.saveOrders();
        }
        else{
            this.validateAllFormFields(this.orderDetailsForm);
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

    saveOrders(){
        let RecordId=3;
        const orderDetails={
            RecordId : RecordId,
            LabName:this.orderDetailsForm.controls['LabName'].value,
            UserFirstName:this.orderDetailsForm.controls['UserFirstName'].value,
            UserLastName:this.orderDetailsForm.controls['UserLastName'].value,
            status:this.orderDetailsForm.controls['Status'].value,
            category:this.orderDetailsForm.controls['Category'].value,
            orderedDate:this.orderDetailsForm.controls['OrderedDate'].value,
            doctorPrescription:this.orderDetailsForm.controls['DoctorPrescription'].value


        }
        this.userService.saveOrderDetails(orderDetails).subscribe(res=>{
            alert('Addded successfully');
            let ref=document.getElementById('cancel')
            ref?.click();
            this.orderDetailsForm.reset();
            this.getOrders();
        });
    }
    getOrders(){
        const role=localStorage.getItem('role')
        const userId=localStorage.getItem('recordId');
        this.userService.getOrderDetails(role, userId).subscribe(res=>{
            this.orderData=res;
        });
    }
    getCategory(){
        this.userService.diagnosisCategory().subscribe(res=>{
            this.categories=res;
            console.log(this.categories.diagnosisCategory)

        })
    }
    addButton(){
        this.isEditClicked=false;
    }
    editOrder(row:any){
        this.isEditClicked=true;
        this.RecordId=row.recordId;
        this.orderDetailsForm.controls['LabName'].setValue(row.labName);
        this.orderDetailsForm.controls['UserFirstName'].setValue(row.userFirstName);
        this.orderDetailsForm.controls['UserLastName'].setValue(row.userLastName);
        this.orderDetailsForm.controls['Status'].setValue(row.status);
        this.orderDetailsForm.controls['Category'].setValue(row.category);
        this.orderDetailsForm.controls['OrderedDate'].setValue(row.orderedDate);
        this.orderDetailsForm.controls['DoctorPrescription'].setValue(row.doctorPrescription);
    }
    updateOrders(){
        if(this.orderDetailsForm.valid){
            const OrderDetails={
                RecordId : this.RecordId,
                LabName:this.orderDetailsForm.controls['LabName'].value,
                userFirstName:this.orderDetailsForm.controls['UserFirstName'].value,
                userLastName:this.orderDetailsForm.controls['UserLastName'].value,
                status:this.orderDetailsForm.controls['UserFirstName'].value,
                category:this.orderDetailsForm.controls['Category'].value,
                orderedDate:this.orderDetailsForm.controls['OrderedDate'].value,
                doctorPrescription:this.orderDetailsForm.controls['DoctorPrescription'].value,

            }
            this.userService.updateOrderDetails(OrderDetails,this.RecordId).subscribe(res=>{
                alert('Update Successfully');
                let ref=document.getElementById('cancel')
                ref?.click();
                this.orderDetailsForm.reset();
                this.getOrders();
            });
        }
        else{
            this.validateAllFormFields(this.orderDetailsForm);
        }
    }
    ReturnToHome(){
        this.rout.navigate(['./home']);
    }
}