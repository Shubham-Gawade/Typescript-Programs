function add(num1:number,num2:number):number{
    return num1+num2;
}

function sub(num1:number,num2:number):number{
    return num1-num2;
}

//Only one default function can be present
export default function mul(num1:number,num2:number):number{
    return num1*num2;
}

export{add,sub};