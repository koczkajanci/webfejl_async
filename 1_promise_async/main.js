const buyApple=(applenumber)=>{
    if(applenumber<5){
        return Promise.resolve('Van eleg alma');
    }
    else{
        return Promise.reject('Nincs eleg alma');
    }
}

const res1 = buyApple(4);
console.log(res1)

res1.then((value)=>{
    console.log(value)
})
console.log("Feloldás után");           

buyApple(5).then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})