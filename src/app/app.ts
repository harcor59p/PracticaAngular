import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Child } from './components/child/child';
import { Child2 } from './components/child2/child2';
import Product from './models/Product';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, FormsModule, Child, Child2, NgClass, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-project';

  constructor() {

    // Inicialización de otras propiedades
    this.userName = "Harold";
    this.myNumber = 10;
    this.myBoolean = true;
    this.product = {
      name: "Laptop",
      price: 1000,
      description: "Laptop de 15 pulgadas",
      isForSale: true
    };
  }

  
  isDark: boolean = false;
  toggleDark() {
    this.isDark = !this.isDark;
  }
  name: String = "";
  setName(e: any) {
    this.name = e;
  }
  userName: String = "";
  myNumber: number;
  myBoolean: boolean;
  product: Product;
  number: number = 0;
  condition: boolean = false;
  condition2: String = "";
  text: String = "Variable del padre";
  person: any =
    {
      sex: "Male",
      age: 41
    }

  addOne() {
    this.number++;
  }
  movies: String[] = ["Matrix", "En Busca de la Felicidad", "Demon Slayer Infiny Castel", "Detective Conan La Decimo cuearta victima"]
  animals: any = [
    {
      id: 1,
      name: "dog",
      img: "https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2016/08/golden-retriever.jpg?strip=all&lossy=1&ssl=1"
    },
    {
      id: 2,
      name: "cat",
      img: "https://cdn0.expertoanimal.com/es/posts/7/7/4/cuidados_para_un_gato_blanco_22477_orig.jpg"
    },
    {
      id: 3,
      name: "bird",
      img: "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg"
    }
  ];

}
