function createCounter(){
    let count = 0;

    return function(){
        count++;
        return count
    }
}

function fakeApi(name){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`Hello ${name}`)
        },1000)
    })
}

async function main(){
    const users = ["Aviansh", "Rahil", "Neha"];
    const counter = createCounter();
    for(let user of users){
        const message = await fakeApi(user);
        console.log(message);
        counter(); 
    }
    console.log("Total processed", counter());
}
main()