import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface IPost{
  id:string;
  author:string;
  title:string;
  category:string;
  date:string;

}
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  posts :IPost[];
  columns  :string[]=['id','author','title','category','date'];

  @ViewChild(MatSort,{static :true}) sort!:MatSort;
  @ViewChild(MatPaginator,{static :true}) paginator!:MatPaginator;
  constructor() {
    this.posts=[{
      id:'1',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'2',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'1',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'2',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'1',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'2',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'1',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'2',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'1',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'2',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'1',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'2',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'1',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'2',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'1',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'2',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'1',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'2',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'1',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    },
    {
      id:'2',
      author:'aaa',
      title:'bb',
      category:'cc',
      date:'2020-02-02'
    }
   ];
   this.dataSource=new MatTableDataSource(this.posts);
   
   }

  ngOnInit(): void {
   this.dataSource.sort=this.sort; 
    this.dataSource.paginator=this.paginator;
  }

  


}
