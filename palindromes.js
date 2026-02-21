let num = 121;
function ispalindrome(num){
    let str = num.split("").toString();
    console.log(str);
    let reverse = num.split("").reverse().toString();        //reversing arr
    console.log(reverse);  
    if(str==reverse){              //checking conditions
        return true;
    }
    else{
        return false;
    }
}
console.log(ispalindrome(num));