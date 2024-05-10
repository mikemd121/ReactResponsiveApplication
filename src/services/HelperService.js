export function HelperService(url, data = {}, method = 'GET') {
    return fetch(url, {  // Return promise
        method: method,
        withCredentials: false,
    })
        .then(res => res.json())
        .then((result) => {
           // console.log(result);
            return result;
        }, (error) => {
            error = error;
        })
}
 
export default HelperService; 


 