function cartFunction()
{
 window.location = "cart.html";
}
var teams = [];
teams.push("packers","panthers");
teams.splice(0,1,"patriots", "bears")
alert(teams[2])