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
    var desc = document.getElementById('a5').value;
    var price = document.getElementById('a6').value;
    var deduct = totalBiweekly - price;

    localStorage.setItem("Biweekly", deduct.toFixed(2));
    document.getElementById("remaining_budget").innerHTML = "<h3> Remaining Budget:  $" + localStorage.getItem("Biweekly") + "</h3>";
    // document.getElementById('exp_desc').innerHTML += '<span class="desc_text">' + desc + '</span>' + '<span class="desc_text">' + price + '</span>';
    document.getElementsByClassName("exp_text").innerHTML += desc + "$" + price;

}


//Resets the input fields after an expense is entered.
function reset() {
    document.getElementById("a5").value = "";
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
    // var desc = document.getElementById("a5").value;
    // var price = document.getElementById("a6").value;

    // document.getElementById('exp_desc').innerHTML += "<span>" + desc + "</span>" + "<span>" + price + "</span>";

}