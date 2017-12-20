

// fetch('http://api.reactprototypes.com/todos?key=testuser1234').then(resp => {
//    return resp.json()
// }).then(resp => {
//     console.log("Resp: ", resp);
// });




// console.log('script file loaded');
//
// const BASE_URL = 'http://s-apis.learningfuze.com/sgt/get';
// // const API_KEY = '?key=testuser1234';
//
// const dataToSend = 'api_key=d7r3OiW4rR';
//
// const settings = {
//     headers: {
//         'content-type': 'application/x-www-form-urlencoded'
//     }
// };
//
// axios.post(BASE_URL, dataToSend, settings)
//     .then(handleResponse)
//     .catch((err)=>{
//         console.log("Error ", err);
//     });
//
// function handleResponse(resp){
//     console.log('Real Function Server Response: ', resp.data);
// }
//


//try catch blocks.

try {
    console.log("Trying something");
    doStuff(2,4);
} catch(err){
    console.warn('Error: ', err);
}

function doStuff(x,y){
    throw new Error('Something went wrong.');
    return x+y;
}
