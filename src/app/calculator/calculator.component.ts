import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  public display: string = '222';

  addValueToInput( value: string): void {
    if(this.display.length < 30) this.display += value;
  }

  clearInput(): void {
    this.display = '';
  }

  delete(): void {
    this.display = this.display.slice(0, -1);
  }

  calculate(): void {
    try {

    } catch (error) {
      this.display = 'Error';
    }
  }

}
