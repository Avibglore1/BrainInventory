// function outer(){
//     let count = 0;
//     return function inner(){
//         count++;
//         console.log(count)
//     }
// }

// const fn = outer();
// fn();
// fn();

// function secret(){
//     let data = "hidden";
//     return{
//         get: () => data,
//         set: (val) => data = val
//     }
// }

// const obj = secret();
// console.log(obj.get());
// obj.set("open");
// console.log(obj.get())

// for(var i=1;i<=3;i++){
//     setTimeout(()=>console.log(i),1000)
// }

// for(let i=1;i<=3;i++){
//     setTimeout(()=>console.log(i),1000)
// }

// function multiply(x){
//     return function(y){
//         return x*y
//     }
// }

// const double = multiply(2);
// console.log(double(5));

function  memo(){
    let cache = {};

    return function(n){
        if(cache[n]) return cache[n];

        console.log("calculating...");
        cache[n] = n * 2;
        return cache[n]
    }
}

const fn = memo();
fn(5);
console.log(fn(5));