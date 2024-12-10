import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { evaluate } from 'mathjs'
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit{
  public display: string = '';

  ngOnInit(): void {
    const saveDisplay = localStorage.getItem('calculatorDisplay');
    if(saveDisplay) this.display = saveDisplay;
  }

  private saveLocalstorage(): void {
    localStorage.setItem('calculatorDisplay', this.display);
  }

  addValueToInput( value: string): void {

    if(this.display === 'Syntaxis Error'){
      this.display = value;
      return;
    }

    if(this.display.length < 30) {
      if(value === '.') {
        if(this.display.includes('.')){
          return;
        }
      }

      this.display += value;
      this.saveLocalstorage();
    }

  }

  changeTheme(value:any){
    console.log(value);
  }

  clearInput(): void {
    this.display = '';
    this.saveLocalstorage();
  }

  delete(): void {
    this.display = this.display.slice(0, -1);
    this.saveLocalstorage()
  }

  calculate(): void {
    try {
      let openParenthesisCount = (this.display.match(/\(/g) || []).length;
      let closeParenthesisCount = (this.display.match(/\)/g) || []).length;

      if(openParenthesisCount != closeParenthesisCount) console.log("Parentesis sin cerrar");

      let sanitizedExpressions = this.processSpecialOperations(this.display);
      this.display = evaluate(sanitizedExpressions).toString();

      this.saveLocalstorage();

    } catch (error) {
      this.display = 'Syntaxis Error';
    }
  }


  processSpecialOperations(expression: string): string {
    expression = expression.replace(/pi/g, 'pi');
    expression = expression.replace(/e/g, 'e');
    expression = expression.replace(/srt\(/g, 'e');
    expression = expression.replace(/sin\(/g, 'sin(');
    expression = expression.replace(/cos\(/g, 'cos(');
    expression = expression.replace(/tan\(/g, 'tan(');
    expression = expression.replace(/log\(/g, 'log10(');
    expression = expression.replace(/ln\(/g, 'log(');
    expression = expression.replace(/exp\(/g, 'exp(');

    expression = expression.replace(/(\d+)\^(\d+)/g, (_, base, exp) => `(${base} ^ ${exp})` );
    return expression;
  }
}
