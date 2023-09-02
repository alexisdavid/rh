// **production
// **development
// **testing
// "homepage": "http://192.168.1.3/next/", //poner un package.json
export const productionMode = 'production';

let pathApiBase
let pathImages
let pathBase
let pathLogOutBase

switch (productionMode) {
    case 'development':
        pathApiBase ="http://127.0.0.1:8000/api/";
        pathImages ="http://127.0.0.1:8000/";
        // pathImages = 'http://192.168.1.3/produccion/apihananapp/public/';
        pathBase = ''
        pathLogOutBase = '/'
        break;
    case 'production':
        pathApiBase = 'http://192.168.1.3/produccion/apihananapp/public/api/';
        pathImages = 'http://192.168.1.3/produccion/apihananapp/public/';
        pathBase = '/next'
        pathLogOutBase = '/next'
        break;

        
    default:
        pathApiBase = 'http://192.168.1.58/apihananapp/public/api/';
        pathImages = 'http://192.168.1.58/apihananapp/public/';
        pathBase = ''
        pathLogOutBase = '/'
        // pathApiBase = 'http://192.168.1.3/produccion/apihananapp/public/api/';
        // pathImages = 'http://192.168.1.3/produccion/apihananapp/public/';
        // pathBase = ''
        // pathLogOutBase = '/'
        break;
        
}
export const pathApi=pathApiBase;
export const path=pathBase;
export const pathLogOut=pathLogOutBase;
export const pathImagesb=pathImages;
// #Listen 12.34.56.78:80
// Listen 80
