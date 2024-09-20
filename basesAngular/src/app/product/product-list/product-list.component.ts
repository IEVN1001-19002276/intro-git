import { Component } from '@angular/core';
 
@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
 
export class ProductListComponent {
 
  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImagenes: boolean = true;
 
    productos: any[] = [
        {
            "productoId": 1,
            "modelo": "sentra",
            "descripcion": "5 puertas",
            "year": "marzo 12 2021",
            "precio": 120000,
            "marca": "nisan",
            "color": "blanco",
            "imgUrl": "https://i.pinimg.com/originals/c4/dd/8c/c4dd8c121ef1da932ac9ad463554fe4a.jpg"
       
        },
        {
            "productoId": 2,
            "modelo": "a4",
            "descripcion": "4 puertas",
            "year": "marzo 12 2021",
            "precio": 130000,
            "marca": "volsvagen",
            "color": "negro",
            "imgUrl": "https://somoskudasai.com/wp-content/uploads/2020/08/EgocUdbU4AABJgL.jpg"
       
        },
        {
            "productoId": 3,
            "modelo": "a5",
            "descripcion": "2 puertas",
            "year": "marzo 12 2021",
            "precio": 150000,
            "marca": "chevrolet",
            "color": "rojo",
            "imgUrl": "https://img.remediosdigitales.com/a301c8/itasha-ferrari-430/1366_2000.jpg"
       
        },  
    ]
  }