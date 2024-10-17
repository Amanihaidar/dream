import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { BehaviorSubject } from 'rxjs';
import { personsData } from '../constant/personData';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons$: BehaviorSubject<Person[]>;
  persons: Array<Person> = [];

  constructor() {
    this.persons$ = new BehaviorSubject<Person[]>([]);
    this.persons = personsData;
  }

  getAll() {
    this.persons$.next(this.persons);
  }

  add(person: Person) {
    this.persons.push(person);
  }

  edit(person: Person) {
    let findElem = this.persons.find(p => p.id == person.id);
    findElem!.product = person.product;
    findElem!.name = person.name;
    findElem!.price = person.price;
    this.persons$.next(this.persons);
  }

  remove(id: number) {
   
    this.persons = this.persons.filter(p => {
      return p.id != id
    });

    this.persons$.next(this.persons);


}
}
