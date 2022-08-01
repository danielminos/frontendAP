import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {

  miPorfolio:any;
  usuarioAutenticado:boolean=true;
  form:FormGroup;
  constructor(private datosPorfolio:PorfolioService, private miFormBuilder:FormBuilder) {
    this.form=this.miFormBuilder.group({
      nombre:['',[Validators.required,Validators.minLength(5)]],
      posicion:['',[Validators.required]],
      posicion2:['',[Validators.required]],
      mail:['',Validators.required,Validators.email],
      ubicacion:['',[Validators.required]]
    })
   }

   get nombre(){
    return this.form.get("nombre");
   }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio=data["persona"];      
    });
  }

  guardarDatosEncabezado(){
    if (this.form.valid)
    {
      alert("Enviar los datos al  servidor (servicio)");
      this.form.reset();
      document.getElementById("cerrarModalEncabezado")?.click();
    }
    else{
      //alert("Hay errores");
      this.form.markAllAsTouched();
    }
  }
}
