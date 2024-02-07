# AngularLearn

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

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




# Interpolation
## what i use in interpolation
use any were html syntax is {{}} inside that use as the js
example:- 2+2 = 4 result showing
            and any variable value to acces to another file then wright like this{{variable_name}}
            function

## what we not use in interpolation

typeof 
increement
decriment
new

# Angular cli & imortant command
"ng help" --> giving all basic command

## Component command
"ng generate component name_folder" short "ng g c name_folder"  grnrratong components

"ng g m name_module" module generate command inside module stored commponents

"ng g class clas_name" generating the file

"ng g interface interface_name" 

"ng build" hosting to the live server to build in building the all mini componenet file make one file


# Components in Angular
when we generate component then niside that making 4 files.

PS C:\angularLearn> ng g c user-list
CREATE src/app/user-list/user-list.component.html (25 bytes)
CREATE src/app/user-list/user-list.component.spec.ts (634 bytes)
CREATE src/app/user-list/user-list.component.ts (258 bytes)
CREATE src/app/user-list/user-list.component.scss (0 bytes)

# components with inline style & template
## in this we create only inlinestyle 
PS C:\angularLearn> ng g c inlineStyle --inline-style
CREATE src/app/inline-style/inline-style.component.html (28 bytes)
CREATE src/app/inline-style/inline-style.component.spec.ts (655 bytes)
CREATE src/app/inline-style/inline-style.component.ts (239 bytes)
in the inline style components css file is not created it is the inline-style.component.ts file in that styleurl to style

## in this we create only template
"ng g c inlinetemplate --inline-template"
CREATE src/app/user-list/user-list.component.scss (0 bytes)
CREATE src/app/inline-style/inline-style.component.spec.ts (655 bytes)
CREATE src/app/inline-style/inline-style.component.ts (239 bytes)


## in this we create noth style and tamplate inline
"ng g c inline-style-template --inline-template --inline-style" both are inline
CREATE src/app/inline-style-template/inline-style-template.component.spec.ts (712 bytes)     
CREATE src/app/inline-style-template/inline-style-template.component.ts (283 bytes)

# Module in angular
generate module in angular command is 
"ng g m module_name" 
PS C:\angularLearn> ng g m user-auth 
CREATE src/app/user-auth/user-auth.module.ts (206 bytes)

in the module many components server and pips 
we not reuse module but there components we can use

## create components in module
"ng g c module_name/components_name"
PS C:\angularLearn> ng g c user-auth/Login
CREATE src/app/user-auth/login/login.component.html (21 bytes)
CREATE src/app/user-auth/login/login.component.spec.ts (612 bytes)
CREATE src/app/user-auth/login/login.component.ts (243 bytes)
CREATE src/app/user-auth/login/login.component.scss (0 bytes)


# function in module
in the function we need to define the data type becouse of in the 
tsconfig.json in that strict mode is true if it is false then not giving the data type declaration error

# Event in angular
--> (click)="", --> (keyup)="", --> (keydown)=""

in this we providing the unique key to identify the same function to uae diferent input tag and any  other use



