function cartFunction()
{
 window.location = "cart.html";
}
var numElements = goodTeams.length;
var matchFound = false;
var teamCheck = "patriots";
var goodTeams = ["Packers", "patriots", "titans", "chiefs"];
for  (var i = 0; i <= 3; i++){
if (teamCheck === goodTeams[i]){
  matchFound = true
  alert("You got it")
  break;
} 
}
if (matchFound === false) {
alert("No Match")
}