var budget = 0;
var finaltot = 0;
var normal = 1;

var shape_price = new Array();
shape_price["round"] = 20;
shape_price["oval"] = 40;
shape_price["square"] = 30;
shape_price["rect"] = 20;
shape_price["heart"] = 50;
shape_price["sheet"] = 40;
shape_price["tieredcolumn"] = 50;
shape_price["tieredstack"] = 40;
shape_price["cupcake"] = 20;

function calculateTotal(){
    getSlice();
    getBudget();
    var subtotal = 10*normal+20*normal+5*normal+getShape();
    document.getElementById("subtot").innerHTML = "$"+ subtotal.toFixed(2);
    var tax = (subtotal*0.13);
    document.getElementById("tax").innerHTML = "$"+ tax.toFixed(2);
    finaltot = (subtotal + tax);
    document.getElementById("totprice").innerHTML = "$"+ finaltot.toFixed(2);
    if (finaltot>budget){
        alert("Budget Exceeded");
    }
}
function getShape() {
    var shapeprice = 0;
    var frm = document.forms["cakeform"];
    var selectedShape = frm.elements["shape"]; 
    shapeprice =  shape_price[selectedShape.value];
    return shapeprice;
}
function getSlice() {
    if(document.getElementById("numslices").value>=1){
        normal = document.getElementById("numslices").value;}
}
function getBudget() {
    if ((document.getElementById("maxbudget")).value>0){
        budget = (document.getElementById("maxbudget")).value;}
    else if ((document.getElementById("maxbudget")).value == 0){
        budget = 999999999999999999999999999;}
    return budget;
}
function submitOrder() {
    calculateTotal();
    if (finaltot>budget){
        alert('You have exceeded your chosen budget. Please increase your budget to continue');
    }
    else if (budget>finaltot){
        alert('Your order is now being processed');
    }
}

