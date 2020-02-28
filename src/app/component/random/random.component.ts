import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import { RandomUsersService } from './../../services/random-users.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
/* Expandable rows */
import {animate, state, style, transition, trigger} from '@angular/animations';



import { User } from './../../interfaces/user';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
  /* Expandable rows */
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class RandomComponent implements OnInit {
  
  randomUsers : User[] = []; 
  data = new MatTableDataSource<User>(this.randomUsers)
  id: number = 0;
  columnsToDisplay = ['id','fullname','email','phone','location','action']
  expandedElement: User | null;
  
  @ViewChild('table',{static:false}) table;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  getAll() {
    this.randomApi.getAll().subscribe(result => {
      console.log(result.results) 
      let newUser : User ;
      result.results.forEach(user => {
        newUser = {
          id: this.randomUsers.length + 1,
          fullname: `${user.name.title} ${user.name.first} ${user.name.last}`,
          email: user.email,
          phone: user.phone,
          cell: user.cell,
          location: `${user.location.street.name} ${user.location.street.number}, ${user.location.city},${user.location.state}, ${user.location.country}`,
          picture : user.picture.large
      }
      this.randomUsers.push(newUser)
      })
      this.data.paginator = this.paginator; 
      this.data = new MatTableDataSource<User>(this.randomUsers)
      this.table.renderRows()
      console.log(this.randomUsers)
    })
  }
  delete(id:number){
    /* console.log(this.randomUsers.length)
    this.data = this.randomUsers.filter(x => x.id !== id)
    console.log(this.randomUsers.length)
    this.table.renderRows() */
    this.randomUsers.splice(id-1,1)
    let newId: number = 1;
    this.randomUsers.forEach(user => {
      user.id = newId;
      newId++;
    })
    this.data = new MatTableDataSource<User>(this.randomUsers);
    this.data.paginator = this.paginator; 
    console.log(this.randomUsers)
    this.table.renderRows() 
  }

  // -----------------------------------PAGINATION MATERIAL-------------------------------------

   // MatPaginator Inputs
   length = 20;
   pageSize = 10;
   pageSizeOptions: number[] = [5, 10, 20, 50];
 
   // MatPaginator Output
   pageEvent: PageEvent;
 
   setPageSizeOptions(setPageSizeOptionsInput: string) {
     console.log(`Entre en setPageSizeOption ${setPageSizeOptionsInput}`)
     if (setPageSizeOptionsInput) {
       this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
       this.table.renderRows()
       this.randomUsers.forEach(user => {
         console.log(user.id)
       })
     }
   }

   //-----------------------------------Filter MATERIAL------------------------------
   applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase(); 
  }

   render(event) {
      console.log(event)
      console.log(`Estoy en render`)
   }
   //------------------------------------------------------------------------------------------------
   //------------------ Expandable Rows ---------------------------------------------------------

  constructor(private randomApi: RandomUsersService) { }
  ngOnInit() {
    this.getAll()
    this.table.renderRows() 
  }
  ngAfterViewInit() {
    this.data.paginator = this.paginator;
}

}
