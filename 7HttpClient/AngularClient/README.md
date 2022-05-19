Link: https://www.tutorialspoint.com/angular8/index.htm

1. Step
ng new 2ComponentAndTemplate
no routing
css style

2. Step
ng generate component expense-entry

add tsconfig.json/"compilerOptions" "strictPropertyInitialization": false, to avoid initialization error


3. Step
Install bootstrap and JQuery library using below commands
cd /go/to/expense-manager
npm install --save bootstrap@4.5.0 jquery@3.5.1

modify angular.json
 "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.css", "src/styles.css"
            ],
            "scripts": [
               "./node_modules/jquery/dist/jquery.js", "./node_modules/bootstrap/dist/js/bootstrap.js"
            ]

4. Restart app		
ng serve	

5. create ExpenseEntry
cd model
ng generate interface expense-entry

6. create ExpenseEntryList
ng generate component ExpenseEntryList

7. generate a service
ng generate service ExpenseEntry

8. add angular material
cd /go/to/expense-manager
ng add @angular/material

import modules to aoo.module.ts
@NgModule({
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})

9. add routing moudle for the project
Generate routing module using below command −
    ng generate module app-routing --module app --flat
        Replace app with the name of your existing module
        Replace app-routing with the name to give the routing module

    In the new module, add appRoutes and RouterModule.forRoot or RouterModule.forChild.

    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { Routes, RouterModule } from '@angular/router';

    const appRoutes: Routes = [
        { path: 'some-path', component: SomeComponent }
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(appRoutes)
        ],
        exports: [
            RouterModule
        ]
    })
    export class AppRoutingModule {}

    Add <router-outlet></router-outlet> to your component if needed (e.g., app.component.html)

10. authentication
ng generate service auth

ng generate component login

ng generate guard expense

11. Edit entry
ng generate component EditEntry

12. Table Sorting Filtering Paginating
https://material.angular.io/components/table/examples

###########################################################################

# 2ComponentAndTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
