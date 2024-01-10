let redius;
var ans;
document.getElementById('submit').onclick=function(){
redius=document.getElementById('idtext').value;
redius=Number(redius);
ans=2*3.14159*redius;
document.getElementById('count').textContent = ans;
// window.alert(ans);

}

var  count=ans;
document.getElementById('btn1').onclick = function () {
    ans--;
    
    document.getElementById('count').textContent = ans; // Update the input field with the decremented value
};
document.getElementById('btn2').onclick = function () {
    ans=0;
    
    document.getElementById('count').textContent =  ans; // Update the input field with the decremented value
};
document.getElementById('btn3').onclick = function () {
    ans++;
    
    document.getElementById('count').textContent =  ans; // Update the input field with the decremented value
};


const subcheck= document.getElementById('1stcheck');
const visa= document.getElementById('1stradio');
const mastercard= document.getElementById('2stradio');
const paypal= document.getElementById('3stradio');
const submit= document.getElementById('1stbtn');
const subresult= document.getElementById('subresult');
const radioresult= document.getElementById('radioresult');

submit.onclick=function(){
    if(subcheck.checked){
        subresult.textContent="You are Subscribe"
    }else{
        subresult.textContent="You are not Subscribe"
    }

    if(visa.checked){
        radioresult.textContent="You are paying with visa"
    }
    else if(mastercard.checked){
        radioresult.textContent="You are paying with mastercard"
    }else if(paypal.checked){
        radioresult.textContent="You are paying with Paypal"
    }else{
        radioresult.textContent="You haven't pay"
    }
}


let fruits=["apple","mango","orange","lemon"];


fruits.forEach(display);
function display(element){
    console.log(element.charAt(0).toUpperCase()+element.slice(1))
}

class product{
    constructor(name, price){
        this.name=name;
        this.price=price;

    }
    displaydetails(){
        console.log(`Product name is ${this.name} and price is ${this.price}`);
    }
}

const prd1=new product("tshirt" ,200);
prd1.displaydetails();


function updateClock(){
    const now=new Date();
    const hours=now.getHours().toString().padStart(2,0);
    const min=now.getMinutes().toString().padStart(2,0);
    const second=now.getSeconds().toString().padStart(2,0);
    const timestring=`${hours}:${min}:${second}`;
    document.getElementById('clock').textContent=timestring;


}
updateClock();
setInterval(updateClock,1000)

