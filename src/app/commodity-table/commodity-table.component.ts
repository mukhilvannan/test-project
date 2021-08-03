import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';

const USER_INFO = [
  {"Commodity-Code": "E1014", "Commodity-Name": "Advisor", "Commodity-Group": "aaaa", "Created By": "bbb","Active":"yes","Updated By":"dddd","Updated Date":"1992-02-02"},
  {"Commodity-Code": "E1013", "Commodity-Name": "b", "Commodity-Group": "aaaa", "Created By": "bbb","Active":"yes","Updated By":"dddd","Updated Date":"1992-02-02"},
  {"Commodity-Code": "E1013", "Commodity-Name": "c", "Commodity-Group": "aaaa", "Created By": "bbb","Active":"yes","Updated By":"dddd","Updated Date":"1992-02-02"},
  { "Commodity-Code": "E1013", "Commodity-Name": "d", "Commodity-Group": "aaaa", "Created By": "bbb","Active":"yes","Updated By":"dddd","Updated Date":"1992-02-02"},
  {"Commodity-Code": "E1013", "Commodity-Name": "e", "Commodity-Group": "aaaa", "Created By": "bbb","Active":"yes","Updated By":"dddd","Updated Date":"1992-02-02"},
  {"Commodity-Code": "E1013", "Commodity-Name": "f", "Commodity-Group": "aaaa", "Created By": "bbb","Active":"yes","Updated By":"dddd","Updated Date":"1992-02-02"},
  {"Commodity-Code": "E1013", "Commodity-Name": "g", "Commodity-Group": "aaaa", "Created By": "bbb","Active":"yes","Updated By":"dddd","Updated Date":"1992-02-02"},
  { "Commodity-Code": "E1013", "Commodity-Name": "h", "Commodity-Group": "aaaa", "Created By": "bbb","Active":"yes","Updated By":"dddd","Updated Date":"1992-02-02"},
  {"Commodity-Code": "E1013", "Commodity-Name": "Advisor", "Commodity-Group": "aaaa", "Created By": "bbb","Active":"yes","Updated By":"dddd","Updated Date":"1992-02-02"},
  {"Commodity-Code": "E1013", "Commodity-Name": "Advisor", "Commodity-Group": "aaaa", "Created By": "bbb","Active":"yes","Updated By":"dddd","Updated Date":"1992-02-02"},
  {"Commodity-Code": "E1013", "Commodity-Name": "Advisor", "Commodity-Group": "aaaa", "Created By": "bbb","Active":"yes","Updated By":"dddd","Updated Date":"1992-02-02"},
  { "Commodity-Code": "E1013", "Commodity-Name": "Advisor", "Commodity-Group": "aaaa", "Created By": "bbb","Active":"yes","Updated By":"dddd","Updated Date":"1992-02-02"}
];

const USER_SCHEMA : any = {
  "Commodity-Code": "text",
  "Commodity-Name": "text",
  "Commodity-Group": "text",
  "Created By": "text",
  "Active": "text",
  "Updated By": "text",
  "Updated Date" : "date",
  "edit":"edit"
}

@Component({
  selector: 'app-commodity-table',
  templateUrl: './commodity-table.component.html',
  styleUrls: ['./commodity-table.component.css']
})
export class CommodityTableComponent implements OnInit,AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor() { }

  ngOnInit(): void {
  }
  

  displayedColumns: string[] = ['Commodity-Code', 'Commodity-Name','Commodity-Group','Created By','Active','Updated By','Updated Date','edit' ];
  dataSource = USER_INFO;
  dataSchema = USER_SCHEMA;
  ngAfterViewInit() {
    //this.dataSource.sort = this.sort;
  }
  

}
