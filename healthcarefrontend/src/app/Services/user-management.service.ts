import { Injectable } from "@angular/core";
import {from, Observable, map, throwError, catchError} from "rxjs";
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { identifierName } from "@angular/compiler";

@Injectable({
    providedIn:'root'
})
export class UserManagementServices{
    headerDict={
        'Contact-Type':'application/json',
        'Accept':'application/json',
        'Access-Control-Allow-Headers':'Content-Type',
        observe:'response'
    }

constructor(private http:HttpClient){}  

setAdminToken(){
    localStorage.setItem('isAdmin','true')

}
getAdminToken(){
    return localStorage.getItem('isAdmin');
}
ClearAdminToken(){
    localStorage.removeItem('isAdmin');

}
IsAdmin():boolean{
    return !!(localStorage.getItem('isAdmin'));
}

setToken(){
    localStorage.setItem('isuerloggedin','true');
}

getToken(){
    return localStorage.getItem('isuerloggedin');
}
clearToken(){
    localStorage.removeItem('isuerloggedin');
    localStorage.removeItem('recordId');
    localStorage.removeItem('role')
}
IsLoggedIn():boolean{
    return !!(localStorage.getItem('isuerloggedin'));
}
saveUsersDetails(userDetails:any):Observable<any>{
    return this.http.post<any>('https://localhost:4200/api/UserDetails', userDetails, {'headers':this.headerDict});

}
getUserDetails():Observable<any>{
    return this.http.get<any>('https://localhost:4200/api/UserDetails', {'headers':this.headerDict});
}
updateUserDetails(date:any,id:number):Observable<any>{
    return this.http.put<any>('https://localhost:4200/api/UserDetails/'+id,date, {'headers':this.headerDict});
}
saveOrderDetails(orderDetails:any):Observable<any>{
    return this.http.post<any>('https://localhost:4200/api/OrderDetails', orderDetails,{'headers':this.headerDict});
}
getOrderDetails(role:any, userId:any):Observable<any>{
    return this.http.get<any>('https://localhost:4200/api/OrderDetails/'+role+'/'+userId, {'headers':this.headerDict});
}
updateOrderDetails(date:any,id:number):Observable<any>{
    return this.http.put<any>('https://localhost:4200/api/OrderDetails'+id,date,{'headers':this.headerDict});
}
saveLabDetails(labDetails:any):Observable<any>{
    return this.http.post<any>('https://localhost:4200/api/LabDetails', labDetails,{'headers':this.headerDict});

}
getLabDetails():Observable<any>{
    return this.http.get<any>('https://localhost:4200/api/LabDetails',{'headers':this.headerDict});
}
updateLabDetails(date: any, id:number):Observable<any>
{
    return this.http.put<any>('https://localhost:4200/api/LabDetails/'+id,date,{'headers':this.headerDict});
}
userAuthentication(userDetails:any){
    return this.http.post<any>('https://localhost:4200/api/UserAuthentication',userDetails,{'headers':this.headerDict});
}
diagnosisCategory():Observable<any>{
    return this.http.get<any>('https://localhost:4200/api/DiagnosisCategory',{'headers':this.headerDict});
}
getUserRoles(){
    return this.http.get<any>('https://localhost:4200/api/UserRoles',{'headers':this.headerDict});
}
private errorHandler(error:HttpErrorResponse){
    if(error.status===0){
        console.error('An error occured:',error.error)
    }
    else{
        console.error('Backend Returned code${error.status},body was',error.error)

    }
    return throwError(()=>new Error('Invalid Credentials'));
}
}
