import {Component, Template, bootstrap} from 'angular2/angular2';
import {NavigationController} from 'controllers/navigationController'


// Annotation section
@Component({
    selector: 'my-app'
})
@Template({
   url: 'index.html'
})

class MyAppComponent {
    constructor() {
        this.name = 'Alice';
    }
}

bootstrap(MyAppComponent);