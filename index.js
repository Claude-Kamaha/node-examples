const rectangle = require('./rectangle');
var rect = require('./rectangle');
function solveRect(l,b){
    console.log("Solving for rectangle with l = " +l+ "and b="+b);
rect(l,b ,(err,rectangle) =>{
if(err){
    console.log("Error:", err.message)
}
else{
    console.log("the area of the rectangle" +l + "and b = "+b+ "is "+ rectangle.area());
    console.log("the area of the rectangle" +l + "and b = "+b+ "is "+ rectangle.perimeter())
}
});
  console.log("this statement is after the call to rect")
}
solveRect(9,5);
solveRect(0,5);
solveRect(-3,5);