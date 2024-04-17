function delay(message){
    return new Promise (resolve => setTimeout(() => resolve(message), 10000));
}

/*
async function showDelayMessage(){
    const message = await delay("funcionou !!");
    console.log(message);
}
*/

function delay (message, calback){
    setTimeout(() => calback(message), 10000);
}

function showDelayMessage(){
    delay("funcionou !!", function(message){
        console.log(message);
    });
}