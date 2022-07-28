# Covergo Assignment Ranjan

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

#project setup
* To run the project make sure you have installed these,
    1. Angular CLI (my version is Angular CLI 11)
    2. NodeJS (my node version is v14.15.4)

* Before you run the project, you have install the node modules,
    1. open the terminal in the root directory ("/overGo")
    2. type "npm install" in the terminal and enter
    3. type "ng serve" to run the project
    4. type "ng test" for run the unit test to the project
    

#technical choice
* Angular 11 (My current cli compatible version).
* tailwindcss ( for styling the project)
* Rxjs & Reactive forms (reactive programming)
* Jasmin and Karma (for unit testing)


#architecture and approach
* have created 3 separate pages
    1. page-one(start page)
    2. page-two(add quotation details)
    3. page-three(view quotation details)
    Note: These 3 pages are added into app page using "<router-outlet></router-outlet>" tag
    
* router for these pages are configured in "AppRoutingModule" file.

* To share the data between page 2 and page 3, I am using the browser "localstorage"
    
