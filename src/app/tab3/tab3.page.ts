import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, finalize, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  newsData: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(public httpClient:HttpClient,private iab: InAppBrowser) {
    
this.getItem().subscribe((response)=>{
  console.log(response);
  var allResponse:any = response;

  this.newsData = allResponse.articles;
})

    console.log(this.newsData);
    
    }

    handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    };
  
    // Get single student data by ID
    getItem(){
      return this.httpClient
        .get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=36777b3b158e4e6ca1eea356e9450de1')
        .pipe(
          catchError(this.handleError)
        )
    }

    opennews(url){
this.iab.create(url).show()
    }

}
