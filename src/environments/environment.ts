// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl:'http://34.171.225.63.nip.io/assignments',
  urlPerfiles: 'http://34.171.225.63.nip.io/users/profiles' ,
  urlPruebas: 'http://34.171.225.63.nip.io/assignments?status=in_progress&to_do' ,
  urlUsuarios: 'http://34.171.225.63.nip.io/users' ,
  urlResultados: 'http://34.171.225.63.nip.io/assignments?status=finished' ,
  urlGuardarPregunta: 'http://34.171.225.63.nip.io/assignments/',
  urlFinalizarprueba:'http://34.171.225.63.nip.io/assignments/questionnaire/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
