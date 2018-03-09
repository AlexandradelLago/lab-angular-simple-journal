import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalService {
  
  constructor(private http: Http) { }

  getAllJournal(){
    return this.http.get('http://localhost:3000/api/journal-entries')
      .map(res => res.json());
  }
  getOneJournal(id){
    return this.http.get(`http://localhost:3000/api/journal-entries/${id}`)
      .map(res =>  res.json() );
  }

  createJournal(newjournal){

    return this.http.post('http://localhost:3000/api/journal-entries',newjournal)
    .map(res => res.json());
  }


  // sendNewJournal){
  //   return this.http.post('http://localhost:3000/phone/new',phone)
  //     .map(res=> res.json())
  // }
}