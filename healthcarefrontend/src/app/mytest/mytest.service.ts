import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';



@Injectable({

  providedIn: 'root'

})

export class MytestService {

  private allUrl="http://localhost:4200/test/allTests";

  private saveUrl="http://localhost:4200/test/addTest";

  private addTestIntoExistingDiagnosticCentreUrl="http://localhost:4200/test/addTest";

  private updateUrl="http://localhost:4200/test/updateTest";

  private deleteUrl="http://localhost:4200/test/deleteTest";

  private searchUrl="http://localhost:4200/test/searchTest";

  private testCostUrl="http://localhost:4200/test/testCost";

  constructor(private http:HttpClient) { }



  getTestList():Observable<any>{

    return this.http.get(`${this.allUrl}`)

  }

  searchTest(id: Number):Observable<any>{

    return this.http.get(`${this.searchUrl}/${id}`)

  }

  saveTest(test: Object):Observable<Object>{

    return this.http.post(`${this.saveUrl}/`,test)
}

addTestIntoExistingDiagnosticCentre(test: Object, id:Number):Observable<Object>{

  return this.http.post(`${this.addTestIntoExistingDiagnosticCentreUrl}/${id}`,test)

}

updateTest(test: Object):Observable<Object>{

  return this.http.put(`${this.updateUrl}/`,test)

}

removeTest(id: Number):Observable<any>{

  return this.http.delete(`${this.deleteUrl}/${id}`,{responseType:'text'})

}

testCost(id: Number):Observable<any>{

  return this.http.get(`${this.testCostUrl}/${id}`)

}

}