import { Component, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ActionState } from 'src/app/core/enum/action-state';
import { Person } from 'src/app/core/models/person';
import { PersonService } from 'src/app/core/services/person.service';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { PersonManagementComponent } from '../person-management/person-management.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  public displayedColumns: string[] = ['product', 'name', 'price'];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];

  /**
   * it holds a list of active filter for each column.
   * example: {firstName: {contains: 'person 1'}}
   *
   */
  public columnsFilters = {};

  public dataSource: MatTableDataSource<Person>;
  private serviceSubscribe!: Subscription;

  constructor(private personsService: PersonService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Person>();
  }   

  preview(source: Person) {
    const dialogRef = this.dialog.open(PersonManagementComponent, {
      width: '400px',
      data: {
        source: source,
        action: ActionState.Preview
      },
    });
  }

  edit(data: Person) {
    const dialogRef = this.dialog.open(PersonManagementComponent, {
      width: '400px',
      data: {
        action: ActionState.Edit
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personsService.edit(result);
      }
    });
  }
  add() {
    const dialogRef = this.dialog.open(PersonManagementComponent, {
      width: '400px',
      data: {
        action: ActionState.Add
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personsService.add(result);
      }
    });

  }


  delete(id: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personsService.remove(id);
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * initialize data-table by providing persons list to the dataSource.
   */
  ngOnInit(): void {
    this.personsService.getAll();
    this.serviceSubscribe = this.personsService.persons$.subscribe(res => {
      this.dataSource.data = res;
    })
  }

  ngOnDestroy(): void {
    this.serviceSubscribe.unsubscribe();
  }
}


