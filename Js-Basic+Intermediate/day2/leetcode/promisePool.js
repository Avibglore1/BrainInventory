/**
 * 1. Custom Promise Pool :

Problem:
You are given:

An array of async functions
A concurrency limit n
Run only n promises at a time
 * 
 * 
 * 
 */

async function promisePool(functions,n){
    let i=0;

    async function worker(){
        while(i<functions.length){
            let currentIndex = i++;
            await functions[currentIndex]();
        }
    }

    let workers = Array(n).fill(0).map(()=>worker());

    await Promise.all(workers);
}