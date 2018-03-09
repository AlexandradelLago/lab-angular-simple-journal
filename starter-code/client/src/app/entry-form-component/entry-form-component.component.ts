import { Component, OnInit } from '@angular/core';
import {JournalService} from '../services/journal.service';

@Component({
  selector: 'app-entry-form-component',
  templateUrl: './entry-form-component.component.html',
  styleUrls: ['./entry-form-component.component.css']
})
export class EntryFormComponentComponent implements OnInit {

  constructor(private journalService : JournalService) { }

  ngOnInit() {
  }

  addJournal(journal){
    console.log(journal.value);
    this.journalService.createJournal(journal.value)
    .subscribe(res => console.log("me hizo el journal"));
  }

}




