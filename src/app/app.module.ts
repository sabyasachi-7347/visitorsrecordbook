import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// import { AuthModule } from '@angular/fire/auth';
// import { AngularFireModule } from '@angular/fire';
// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireModule } from '@angular/fire';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { environment } from 'src/environments/environment';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginPage } from './login/login.page';
@NgModule({
  declarations: [AppComponent,LoginPage],
  entryComponents: [LoginPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, 
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAuthModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},InAppBrowser , GooglePlus, ],
  bootstrap: [AppComponent],
})
export class AppModule {}
0