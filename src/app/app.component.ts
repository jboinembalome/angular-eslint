import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-eslint';
  helloWorld?: string;

  ngOnInit(): void {
    this.helloWorld = this.getHelloWorld();
  }

  private getHelloWorld(): string {
    const hello = 'Hello';
    const world = 'World';

    return `${hello} ${world}!`;
  }
}
