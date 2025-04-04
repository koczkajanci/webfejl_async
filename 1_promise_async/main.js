

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



const buyApple2=(applenumber=>{
    return new Promise((resolve,reject) =>{
        if(applenumber<5){
            resolve('Van eleg alma sigma')
        }
        else{
            reject('Nincs eleg alma sigma')
        }
    })
})

buyApple2(3).then((respektkrokodilo)=>{
    console.log(respektkrokodilo);
}).catch((error)=>{
    console.log(error)
})

buyApple2(5).then((respektkrokodilo)=>{
    console.log(respektkrokodilo);
}).catch((error)=>{
    console.log(error)
})

setTimeout(()=>{
},0)

const buyApple3=(applenumber=>{
    return new Promise((resolve,reject) =>{
        if(applenumber<5){
            setTimeout(()=>{
                resolve('Van eleg alma respekt') 
            },2000)
        }
        else{
            setTimeout(()=>{
                reject('Nincs eleg alma fuuj') 
            },3000)
        }
    })
})

buyApple3(4).then((skibidi)=>{
    console.log(skibidi);
}).catch((error)=>{
    console.log(error)
})

const res2 = buyApple3(5);
console.log(res2)


class Service{
    #data
    constructor(){
        this.#data = people;
    }
    init(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.#data);
            },3000)
        })
     
    }
}

class dataviewController{
    #div
    constructor(){
        this.#div = document.createElement('div');
        this.#div.textContent= 'Loading';
        document.body.appendChild(this.#div)
    }

    setContent(array){
        this.#div.innerHTML = "";
        for(const element of array){
           const div = document.createElement('div')
           div.textContent = element.name;
           this.#div.appendChild(div)
        }
    }

    
}

const ser = new Service;
const view = new dataviewController;
ser.init().then((value)=>{
    view.setContent(value)
})

