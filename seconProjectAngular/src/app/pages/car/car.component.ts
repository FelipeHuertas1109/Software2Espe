import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  // 4. Crear señales con valores iniciales
  brand = signal<string>('Renault');
  year = signal<number>(2020);
  student = signal<string>('felipe huertas');

  // 5. Método getCarDescription
  getCarDescription(): string {
    return `${this.brand()} - ${this.year()}`;
  }

  // 6. Método changeCar
  changeCar(): void {
    this.brand.set('Kia');
    this.year.set(2021);
  }

  // 7. Método resetForm
  resetForm(): void {
    this.brand.set('Renault');
    this.year.set(2020);
  }

  // 8. Método changeYear
  changeYear(): void {
    this.year.set(2025);
  }
}
