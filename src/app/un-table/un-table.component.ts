import { Component, OnInit } from '@angular/core';


const USER_INFO = [
  {"UN-Number": "111", "UN-Number-Description": "Advisor", "UN-Group-Code": "aaaa","UN-Group-Code-description":"cccc", "Created By": "bbb","Date":"1992-02-02"},
  {"UN-Number": "111", "UN-Number-Description": "Advisor", "UN-Group-Code": "aaaa","UN-Group-Code-description":"cccc", "Created By": "bbb","Date":"1992-02-02"},
  {"UN-Number": "111", "UN-Number-Description": "Advisor", "UN-Group-Code": "aaaa","UN-Group-Code-description":"cccc", "Created By": "bbb","Date":"1992-02-02"},
  {"UN-Number": "111", "UN-Number-Description": "Advisor", "UN-Group-Code": "aaaa","UN-Group-Code-description":"cccc", "Created By": "bbb","Date":"1992-02-02"},
];

const USER_SCHEMA : any = {
  "UN-Number": "number",
  "UN-Number -Description": "text",
  "UN-Group-Code": "text",
  "UN-Group-Code-description": "text",
  "Created By": "text",
  "Date" : "date",
  "edit":"edit"
}

@Component({
  selector: 'app-un-table',
  templateUrl: './un-table.component.html',
  styleUrls: ['./un-table.component.css']
})
export class UNTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['UN-Number', 'UN-Number-Description','UN-Group-Code','UN-Group-Code-description','Created By','Date','edit' ];
  dataSource = USER_INFO;
  dataSchema = USER_SCHEMA;

}
