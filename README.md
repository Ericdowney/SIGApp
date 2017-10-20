# Tech SIG 10/20/2017

This project was started with the Ionic CLI from the blank template.

```
ionic start SIGApp blank
```

This generated the HomePage, AppComponent, and the AppModule including ionic specific modules.  This is a simple todo list application where a user can create tasks and manage open/completed tasks.

## Running the App

First,
```
npm install | yarn install
```

then,
```
ionic serve
```

This will run the application in the default browser.  To build a native application, you will need to run

```
ionic cordova platform add (ios | android)
```

This will generate the project, which can then be run on a native device.

## NGRX/Store

THe @ngrx/store dependency is an Angular specific Redux implementation for state management.