// Higher Order Functions

var outer = function(x){
  var localVariable = x;
  var inner = function(){
    // return localVariable;
    console.log(localVariable);
  }

  return inner;
  console.log(inner);
}
var five = outer(5);
console.log(five());