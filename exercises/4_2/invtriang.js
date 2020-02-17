n = 5;
var i;
var j;
var k;
var linha;
for (k = 0; k < n; k++){
    linha = '';
    for (i = 0; i < (n - 1 - k); i++){
    linha = linha + " ";
    }
    for (j = 0; j < k + 1; j++){
    linha = linha + "*";
    }
console.log(linha);
}