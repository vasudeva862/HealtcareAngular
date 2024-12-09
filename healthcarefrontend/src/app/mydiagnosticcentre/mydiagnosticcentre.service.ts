import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MydiagnosticcentreService {
  private allUrl="http://localhost:4200/diagnosticCentre/allDiagnosticCentres";
  private saveUrl="http://localhost:4200/diagnosticCentre/addDiagnosticCentre";
  private updateUrl="http://localhost:4200/diagnosticCentre/updateDiagnosticCentre";
  private deleteUrl="http://localhost:4200/diagnosticCentre/deleteDiagnosticCentre";
  private searchUrl="http://localhost:4200/diagnosticCentre/searchDiagnosticCentre";
  private searchTestUrl="http://localhost:4200/diagnosticCentre/allTestsInDiagnosticCentre";
  constructor(private http:HttpClient) {   }
  
   getDiagnosticCentreList():Observable<any>{
    return this.http.get(`${this.allUrl}`)
  }

getAllTestsInDiagnosticCentre(id: Number):Observable<any>{

    return this.http.get(`${this.searchTestUrl}/${id}`)

  }

  searchDiagnosticCentre(id: Number):Observable<any>{

    return this.http.get(`${this.searchUrl}/${id}`)

  }

  saveDiagnosticCentre(diagnosticCentre: Object):Observable<Object>{

    return this.http.post(`${this.saveUrl}/`,diagnosticCentre)

  }

  updateDiagnosticCentre(diagnosticCentre: Object):Observable<Object>{

    return this.http.put(`${this.updateUrl}/`,diagnosticCentre)

  }

  removeDiagnosticCentre(id: Number):Observable<any>{

    return this.http.delete(`${this.deleteUrl}/${id}`,{responseType:'text'})

  }

}