import { Component, EventEmitter, output, Output } from '@angular/core';
import { ProductService } from '../../services/product-service';


@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.css'
})
export class Child2 {
  // @Output()
  // login: EventEmitter<any> = new EventEmitter<any> ;

  login = output<any>();

  userName: String = "Harold";

  handeleLogin() {
    this.login.emit(this.userName);
  }

  constructor (public productService : ProductService) {}

}
