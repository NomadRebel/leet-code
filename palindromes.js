let num = "kayak";
function ispalindrome(num){
    let str= String(num);

    console.log(typeof(str));
    let arr = str.split('');
    console.log(arr);
    let str2= arr.toString();
    console.log(typeof(str2));
    let reverse = arr.reverse();

    console.log(reverse);
    let reversestr=reverse.toString();
    console.log(typeof(reversestr));
    if(str2===reversestr){
        return "ispalindrome";
    }
    else{
        return"not a plaindrome";
    }
}
console.log(ispalindrome(num));