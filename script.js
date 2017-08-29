function calculate() {
    var sal = document.getElementById('a1');
    var exp = document.getElementsByClassName('expenses');
    var expInput = exp.length;
    var total = 0;

    for (var i = 0; i < expInput; i++) {
        total = total + parseInt(exp[i].value) * 12;
        x = parseInt(sal.value) - total;

    }
    document.getElementById('a2').value = x;
    document.getElementById('a3').value = x / 24;

}

function storage() {
    var annual = document.getElementById('a2');
    var biweekly = document.getElementById('a3');
    localStorage.setItem("Annual", annual.value);
    localStorage.setItem("Biweekly", biweekly.value);

}

function calcExpns() {
    var totalAnnual = localStorage.getItem("Annual");
    var totalBiweekly = localStorage.getItem("Biweekly");
    var desc = document.getElementById('a5').value;
    var price = document.getElementById('a6').value;
    var deduct = totalBiweekly - price;


    localStorage.setItem("New Amount", deduct);

    localStorage.setItem(desc, price);






    //localStorage.setItem(desc.value, price.value);

}



function reset() {
    document.getElementById("a5").value = "";
    document.getElementById("a6").value = "";

}