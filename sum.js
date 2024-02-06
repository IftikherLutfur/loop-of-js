function identify(info){
    if(typeof info !== 'object'){
        return "thik thak karo"
    }
    
    else if(!info.name || !info.age){
        return "Not Valid"
    }
    else if(typeof info.name != 'string' || typeof info.age != 'number'){
        return 'Name should be string and age should be number' 
    }
return `my name is : ${info.name}. my age is ${info.age} `;

}
console.log(identify({name:'Abdullah', age: 20}));