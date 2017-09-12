function calculate() {
    var sal = document.getElementById('a1');
    var exp = document.getElementsByClassName('expenses');
    var expInput = exp.length;
    var total = 0;

    for (var i = 0; i < expInput; i++) {
        total = total + parseInt(exp[i].value) * 12;
        x = parseInt(sal.value) - total;
        y = parseInt(x / 24);
    }
    document.getElementById('a2').value = x.toFixed(2);
    document.getElementById('a3').value = y.toFixed(2);


}

function storage() {
    var annual = document.getElementById('a2');
    var biweekly = document.getElementById('a3');


    localStorage.setItem("Annual", annual.value);
    localStorage.setItem("Biweekly", biweekly.value);
    localStorage.setItem("Static-BiWeekly", biweekly.value);

}

function calcExpns() {
    var totalBiweekly = localStorage.getItem("Biweekly");
    var shopping = document.getElementById("a5").options[0].text;
    var dining = document.getElementById("a5").options[1].text;
    var price = document.getElementById('a6').value;

    var din = localStorage.getItem("Dining");
    var shp = localStorage.getItem("Shopping");
    var dinVal = +din + +price;
    var shpVal = +shp + +price;
    var deduct = totalBiweekly - price;

    localStorage.setItem(shopping, shpVal);
    localStorage.setItem(dining, dinVal);
    localStorage.setItem("Biweekly", deduct.toFixed(2));
    document.getElementById("remaining_budget").innerHTML = "<h3> Remaining Budget:  $" + localStorage.getItem("Biweekly") + "</h3>";
    // document.getElementById('exp_desc').innerHTML += '<span class="desc_text">' + desc + '</span>  ' + '  <span class="desc_text">$' + price + '</span>';

    console.log(shpVal);

    //Try an If statement with the different categories.  Right now they are adding the price to all categories.
}


//Resets the input fields after an expense is entered.
function reset() {
    document.getElementById("a6").value = "";

}

function display() {
    //Displays the remaining budget and is actively deducted when user inputs an expense.
    document.getElementById("remaining_budget").innerHTML = "<h3> Remaining Budget:  $" + localStorage.getItem("Biweekly") + "</h3>";
    var d = new Date();
    var n = d.getDate();
    var sb = localStorage.getItem("Static-BiWeekly");
    //This will reset the value of Biweekly in localStorage to the static value assigned when you first setup your budget.
    if (n === 15 || n === 30 || n === 31) {
        localStorage.setItem("Biweekly", sb);
    } else {
        console.log("Not yet payday!");
    }


    // var food = localStorage.getItem("Food");
    // var clothing = localStorage.getItem("Clothing");
    // document.getElementById('exp_desc').innerHTML = "<li>Food $" + food + "</li>" + "<li>Clothing $" + clothing + "</li>";

}