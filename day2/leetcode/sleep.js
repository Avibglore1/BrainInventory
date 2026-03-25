/***
 * 2621. Sleep

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Note that minor deviation from millis in the actual sleep duration is acceptable.
 * 
 * 
 */

async function sleep(millis){
    return new Promise(resolve=>{
        setTimeout(()=>{resolve()},millis)
    })
}

console.log("Start");
await sleep(2000);
console.log("end");