import { TestBed } from "@angular/core/testing";
import { UserManagementServices } from "./user-management.service";

describe('UserManagementServices',()=>{
    let service:UserManagementServices;

    beforeEach(()=>{
        TestBed.configureTestingModule({});
        service=TestBed.inject(UserManagementServices);
    })

    it('should be created', ()=>{
        expect(service).toBeTruthy();
    });
});