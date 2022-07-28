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
    
