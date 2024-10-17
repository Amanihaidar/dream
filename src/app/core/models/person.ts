export class Person {
    id?: number;
  product: string;
  name: string;
  price: number;

  constructor(id?: number, product: string = '', name: string = '', price: number = 0) {
this.id = id;
this.product = product;
this.name = name;
this.price = price;
}
}
