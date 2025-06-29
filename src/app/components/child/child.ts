import { Component, input, Input } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
//  @Input()
//  msg: String = ""

msg = input<String>('') ;

//  @Input()
//  person : any

person = input<any>() ;

constructor(public productService: ProductService) {  
}
}
