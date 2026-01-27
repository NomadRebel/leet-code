let num = "kayak";
function ispalindrome(num){
    let str= String(num);               //converting value to a string
    let arr = str.split('');            //converting string to array
    let str2= arr.toString();           //converting array to string
    let reverse = arr.reverse();        //reversing arr
    let reversestr=reverse.toString();  //converting reverse to a string
    if(str2===reversestr){              //checking conditions
        return true;
    }
    else{
        return false;
    }
}
console.log(ispalindrome(num));