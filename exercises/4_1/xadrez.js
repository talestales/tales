function chamapeca(peca) {
    switch (peca){
        case "peão":
        console.log("anda frente, captura diagonal, uma casa por vez")
        break;
        case "torre":
        console.log("anda na horizontal ou vertical, quantas casas quiser")
        break;
        default:
        console.log("sem parametro");
    }
} 
chamapeca("Peão")

<!DOCTYPE html>
<html>
<body>

<p>Click the button to demonstrate the prompt box.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}
</script>

</body>
</html>

<!DOCTYPE html>
<html>
<body>

<form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>

<p>Click the "Submit" button and the form-data will be sent to a page on the server called "/action_page.php".</p>

</body>
</html>
