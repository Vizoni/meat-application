import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent,
                CommonModule, FormsModule, ReactiveFormsModule]
    // esses são os módulos compartilhados para não o módulo usado não ter
    // q importar esses módulos novamente, enxugando a configuração desses outros modulos 

})
export class SharedModule {

}