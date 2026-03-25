
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  return (result * 2) ;
})
.then(function(result) {
  return (result * 2) ;
}).then(function(result) {
  return (result * 2) ;
}).then(result=>{
    console.log(result);
})