// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
    config: {
      apiKey: 'AIzaSyC7i5330X4JVKqJBssdCNUW9VqjbRrhxCE',
      authDomain: 'courseapp-8980d.firebaseapp.com',
      projectId: 'courseapp-8980d',
      storageBucket: 'courseapp-8980d.appspot.com',
      messagingSenderId: '1092927712719',
      appId: '1:1092927712719:web:dac6ca376d48c3df7ff6ba',
    },
    actionCodeSettings: {
      url: 'http://localhost:5200/demo',
      handleCodeInApp: true,
    },
  },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
