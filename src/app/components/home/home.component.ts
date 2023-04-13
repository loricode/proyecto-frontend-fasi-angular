import { Component, OnInit, Input } from '@angular/core';
import { GastoService } from '../../services/gasto.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { IGasto } from 'src/app/interfaces/gasto/gasto.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  detalle = { money:3000 , cantidad:6 };
   
  public labelHeader = {
    title:'Television',
    subtitle:'este es un ejemplo de sub'
  };

  control = this.fb.group({
    money: [''],
    description: [''] 
   });

  constructor(private gastoService:GastoService, public fb:FormBuilder){
  
  }


  ngOnInit(): void {
   // this.getGasto();
  }

  public getGasto(){
    this.gastoService.getGasto().subscribe(res => {
      this.detalle = res
    })
  }

  public addSpent(){

     this.gastoService.addSpent(this.control.value).subscribe(res => {
      this.getGasto()
     })

  }

}
