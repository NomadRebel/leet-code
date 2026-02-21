const num = 121;
function ispalindrome(num){
    const str = String(num).split("").toString();
    const reverse = String(num).split("").reverse().toString();        
    if(str==reverse){              
        return true;
    }
    else{
        return false;
    }
}
console.log(ispalindrome(num));