import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.css'
})
export class ToggleButtonComponent {

  changeTheme(isChecked:boolean){
    console.log(isChecked);
    const bodyElement = document.body;

    if (isChecked){
      bodyElement.classList.add('dark-mode');
      bodyElement.classList.remove('light-mode');
    }else {
      bodyElement.classList.add('light-mode');
      bodyElement.classList.add('dark-mode');
    }
  }

}
