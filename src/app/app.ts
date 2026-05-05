import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "./shared/components/header/header";
import { Home } from "./features/home/home";



@Component ({
    selector: 'app-root',
    templateUrl: 'app.html',
    imports: [Header,Home,RouterOutlet]
})

export class App {

}