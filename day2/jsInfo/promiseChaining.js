
// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// });

// promise.then(function(result) {
//   return (result * 2) ;
// })
// .then(function(result) {
//   return (result * 2) ;
// }).then(function(result) {
//   return (result * 2) ;
// }).then(result=>{
//     console.log(result);
// })

function step1(){
    return Promise.resolve(10);
}
function step2(num){
    return num*2
}
function step3(num){
    return Promise.resolve(num+5);
}

step1().then(result=>step2(result))
.then(result=>step3(result))
.then(result=>console.log(result))