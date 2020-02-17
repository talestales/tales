n = 3;
var i;
var j;
var k;
var linha = '';
for (i = 0; i < n; i++){
    for (j = 0; j < n - (i + 1); j++){
        linha = linha + " ";
    }
    for (k = 0; k < i; k++){
        linha = linha + ("*");
    }
    console.log(linha);
}