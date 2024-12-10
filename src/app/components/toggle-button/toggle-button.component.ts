import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.css'
})
export class ToggleButtonComponent implements OnInit{


  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    const bodyElement = document.body;
  }

  changeTheme(isChecked:boolean){
    console.log(isChecked);
    const bodyElement = document.body;

    if (isChecked){
      bodyElement.classList.add('dark-mode');
      bodyElement.classList.remove('light-mode');
    }else {
      bodyElement.classList.add('light-mode');
      bodyElement.classList.remove('dark-mode');
    }
  }

}
