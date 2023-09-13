// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey:'',
    authDomain:'',
    databaseURL:'',
    projectId:'',
    storageBucket:'',
    messagingSenderId:'',
    appId:'',
    measurementId:''
  }
  // googleConfig : {
  //   "installed":{
  //     "client_id":"477492944986-lus8s1qeirv0j7843rc9j8oqf8q7hh96.apps.googleusercontent.com",
  //     "project_id":"enduring-brace-331310",
  //     "auth_uri":"https://accounts.google.com/o/oauth2/auth",
  //     "token_uri":"https://oauth2.googleapis.com/token",
  //     "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
  //     "redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]
  //   }
  // }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
