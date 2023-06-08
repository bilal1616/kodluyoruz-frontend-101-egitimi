// arrow function kullanımı
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}

hello("Javascript")

const helloFuncV1 = (firstName) => {console.log(`Merhaba ${firstName}`)}
helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`) // bir parametre bir dönüş işlemi
helloFuncV2("helloFuncV2")

const helloFuncV3 = (firstName, lastName) => console.log(`Merhaba ${firstName} ${lastName}`) // birden fazla parametre için
helloFuncV3("helloFuncV3", "Last Name İnfo")

const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}
helloFuncV4("helloFuncV4", "Other Info")


// Örnek 1:
let movie = { 

name: "La Casa da Papel",

thisInArrow:() => { 
console.log("Movie name is " + this.name); // 'this' window'u referans gösterir. Bu yüzden name'yi bulamaz.
}, 

thisInRegular(){ 
console.log("Movie name is " + this.name); // 'this' kendisini referans gösterir ve çalışır.
} 

};
movie.thisInArrow(); // output : Movie name is
movie.thisInRegular(); // output : Movie name is La Casa da Papel

// Örnek 2:
const newArray = (nums) => {

    const newNums = nums.map(e=>{      
        if(e%2==0){
            return e*2
        }else if(e%2==1){
            return e*3
        }
    });
   return newNums 
}

console.log(newArray([1,2,3,4,5]));  // output: [3,4,9,8,15]