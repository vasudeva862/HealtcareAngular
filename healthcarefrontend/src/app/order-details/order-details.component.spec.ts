import { ComponentFixture, TestBed } from "@angular/core/testing";

import { OrderDetailsComponent } from "./order-details.component";

describe('OrderDetailsComponent',()=>{
    let component:OrderDetailsComponent;
    let fixture:ComponentFixture<OrderDetailsComponent>;

    beforeEach(async()=>{
        await TestBed.configureTestingModule({
            declarations:[OrderDetailsComponent]
        })
        .compileComponents();
    })
})