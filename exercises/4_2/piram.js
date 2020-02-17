n = 7;
m = (n + 1) / 2;
var i;
var j;
var k;
var linha = '';
for (i = 0; i < m ; i++){
    linha = '';
    for (j = 0; j < m - i; j++){
        linha = linha + " ";
    }
    for (k = j; k < i + m - 1; k++){
        linha = linha + ("*");
    }
    console.log(linha);
}