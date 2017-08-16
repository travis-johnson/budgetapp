// function calculate() {
//     var form = document.forms["oa_budget"];
//     var rent = document.getElementById("rent").value;
//     var utilities = document.getElementById("utilities");
//     var yearlyCost = parseInt(rent) * 12;
//     document.getElementById("budget").innerHTML("Total of bills: " + yearlyCost);
// }

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
    var desc = document.getElementById('a5');
    var price = document.getElementById('a6');

    localStorage.setItem("Annual", annual.value);
    localStorage.setItem("Biweekly", biweekly.value);

    localStorage.setItem("Description", desc.value);
    localStorage.setItem("Price", JSON.stringify(price));
}





// calculate = function() {
//     var salary = document.getElementById('a1').value;
//     var rent = document.getElementById('a2').value;
//     var utilities = document.getElementById('a3').value;
//     var insurance = document.getElementById('a4').value;
//     var phone = document.getElementById('a5').value;
//     var savings = document.getElementById('a6').value;
//     var travel = document.getElementById('a7').value;
//     var fixedExpenses = parseInt(rent) + parseInt(utilities) + parseInt(insurance) + parseInt(phone) + parseInt(savings) + parseInt(travel);
//     var totalExpenses = parseInt(fixedExpenses) * 12;
//     var annualBudget = parseInt(salary) - parseInt(totalExpenses);
//     document.getElementById('a8').value = salary - totalExpenses;
//     document.getElementById('a9').value = parseInt(annualBudget) / 24;

// }