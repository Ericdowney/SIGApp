import { TodoProvider } from '../providers/todoItems/todo.provider';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { reducers as AppReducers } from '../state/app.reducers';
import { MyApp } from './app.component';
import { Pages } from '../pages';

@NgModule({
  declarations: [
    MyApp,
    Pages.all
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(AppReducers),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Pages.all
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TodoProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
