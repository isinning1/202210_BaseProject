import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorialListComponent } from './editorial-list/editorial-list.component';
import { EditorialRoutingModule } from './editorial-routing.module';

@NgModule({
  declarations: [EditorialListComponent],
  imports: [
    CommonModule,
    EditorialRoutingModule // Importa el módulo de enrutamiento aquí
  ],
  exports: [EditorialListComponent] // Exporta el componente si se va a utilizar fuera del módulo
})
export class EditorialModule { }