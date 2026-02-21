const num = 121;
function ispalindrome(num){
    const str = num.split("").toString();
    const reverse = num.split("").reverse().toString();        
    if(str==reverse){              
        return true;
    }
    else{
        return false;
    }
}
console.log(ispalindrome(num));