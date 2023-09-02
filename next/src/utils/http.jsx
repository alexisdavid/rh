/**
 *  @version 1.0.0
 *  @author Alexis
 *  @description Cliente HTTP para todas las peticiones Web basada en superagent: GET, POST, DELETE, PUT, PATCH
 *  @param {String} url: "/EndPoint"
 *  @param {Object} data: Payload
*/

import request from "superagent";
import { decryptString } from "./encrypt";
// import {pathApi} from "../configuracion"
// Web API URL

const baseUrl ='http://127.0.0.1:8000/api/';

class Request {
    
    get(url, data) {
       let tkn=sessionStorage.getItem('authToken')
        let  token=''
        if (tkn) {
             token = decryptString(tkn);
        }
        
        
        const result = request
            .get(baseUrl + url)
            .query(data)
            .set({'Accept': 'application/json','Authorization': 'Bearer ' + token})
            .then(response => {
                return { result: response.body, statusCode: response.status };
            })
            .catch(error => {
                const { status } = error;
                if (status >= 400) {
                    return { message: error.message, statusCode: status };
                }
                return { message: error.message, statusCode: 503 };
            });
        return result;
    }

    post(url, data) {
       let tkn=sessionStorage.getItem('authToken')
        let  token=''
        if (tkn) {
            token = decryptString(tkn);
       }
        const result = request
            .post(baseUrl + url)
            .set({'Accept': 'application/json','Authorization': 'Bearer ' + token})
            .send(data)
            .then(response => {
   
                return { result: response.body, statusCode: response.status };
            })
            .catch(error => {
                return { message: error.message, statusCode: 503 };
            });
        return result;
    }

    delete(url, data) {
       let tkn=sessionStorage.getItem('authToken')
        let  token=''
        if (tkn) {
            token = decryptString(tkn);
       }
        const result = request
            .delete(baseUrl + url)
            .send(data)
            .set({'Accept': 'application/json','Authorization': 'Bearer ' + token})
            .then(response => {
                return { result: response.body, statusCode: response.status };
            })
            .catch(error => {
                return { message: error.message, statusCode: 503 };
            });
        return result;
    }

    put(url, data) {
       let tkn=sessionStorage.getItem('authToken')
        let  token=''
        if (tkn) {
            token = decryptString(tkn);
       }
        const result = request
            .put(baseUrl + url)
            .send(data)
            .set({'Accept': 'application/json','Authorization': 'Bearer ' + token})
            .then(response => {
                return { result: response.body, statusCode: response.status };
            })
            .catch(error => {
                return { message: error.message, statusCode: 503 };
            });
        return result;
    }

    patch(url, data) {
        let tkn=sessionStorage.getItem('authToken')
        let  token=''
        if (tkn) {  token = decryptString(tkn); }
        const result = request
            .patch(baseUrl + url)
            .send(data)
            .set({'Accept': 'application/json','Authorization': 'Bearer ' + token})
            .then(response => {
                return { result: response.body, statusCode: response.status };
            })
            .catch(error => {
                return { message: error.message, statusCode: 503 };
            });
        return result;
    }

}

export default Request;
