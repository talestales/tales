n = 203;
primo = false;
var i;
for (i = 2; i * i < n; i++){
    if (n % i == 0){
        primo = false;
        console.log("não é primo");
        break;
    }else{
        primo = true;
    }
}
if (primo == true){
    console.log("é primo");
}
