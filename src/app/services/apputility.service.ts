import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApputilityService {
  BaseURL = 'http://localhost:3000/';
  contentType = { 'Content-Type': 'application/json'};
  httpOptions = { headers: new HttpHeaders(this.contentType) };
  constructor(private http: HttpClient,) { }
  postAPI(parameter, methodName): Observable<any> {


    // if (this.appdetails.getEncryptUserName() !== '') {
    //   parameter.Token1 = this.appdetails.getEncryptUserName();
    //   parameter.Token2 = this.appdetails.getEncryptPassword();
    // }
    //////////////   for idle state   ////////////////////
    // this.methodname = methodName;
    // if (methodName != "/GetLogininformation") { this.reset(); }
    //////////////   for idle state   ////////////////////
    // this.logAPIRequest(parameter, this.BaseURL + methodName);

    // if (this.isOnline()) {
      // if (this.platform.is('desktop') || this.platform.is('mobileweb')) {
        //this.presentLoading();
        return this.http.post(this.BaseURL + methodName, parameter, this.httpOptions)
          .pipe(finalize(async () => {
            //this.loading.dismiss();
            map(response => {
              console.log('not desplay');

              // this.logAPIResponse(response);
              return response;
            })
          }),
            catchError(this.handleError(methodName, []))
          );
      // }
      // else {

        //====================================== Create promise================
        // return from(new Promise((resolve, reject) => {
        //   // this.presentLoading();
        //   this.nativehttp.setDataSerializer('json');
        //   // this.nativehttp.setServerTrustMode('pinned').then((res) => {
        //   // console.log('[SUCCESS] SSL Pinning Starts!' + res);
        //   // alert("mobile"+res);
        //   this.nativehttp.post(this.BaseURL + methodName, parameter, this.contentType)
        //     .then(response => {
        //       console.log(response.status);
        //       console.log(response);
        //       try {
        //         response.data = JSON.parse(response.data);
        //         this.logAPIResponse(response.data);
        //         resolve(response.data);
        //       } catch (e) {
        //         console.error('JSON parsing error');
        //       }
        //     })
        //     .catch(response => {
        //       console.log("catch " + JSON.stringify(response));
        //       console.log(response.status);
        //       console.log(response.error);
        //       this.logAPIResponse(response);
        //       reject(response);
        //     });


        //   // }).catch((res) => {
        //   // console.log('[FAILED] SSL Pinning Starts!' + res);
        //   // alert('[FAILED] SSL Pinning Starts!'+res);
        //   // })
        // })).pipe(finalize(async () => {//send obsevable back
        //   // this.loading.dismiss();
        //   map(response => {
        //     this.logAPIResponse(response);
        //     return response;
        //   })
        // }),
        //   catchError(this.handleError(methodName, []))
        // );
      // }
    // }
    // else {
      // this.showAlert(this.appdetails.getAppName(), this.appdetails.getInternetError());
      // return this._status.asObservable();
    // }
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //console.error(error); // log to console instead
      //console.error(error.status);
      //this.logAPIResponse(error);
      console.log(JSON.stringify(error), "error");
      // this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
