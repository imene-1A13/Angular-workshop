import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateatelier',
  templateUrl: './templateatelier.component.html',
  styleUrls: ['./templateatelier.component.css']
})
export class TemplateatelierComponent implements OnInit {

  constructor() { }
  user={nom:"", email:"", typeCarte:"", numeroCarte:"", dateExpiration:"", code:""}

  ngOnInit(): void {
  }

}
