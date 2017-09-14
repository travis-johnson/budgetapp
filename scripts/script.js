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


//Resets the input fields after an expense is entered.
function reset() {
    document.getElementById("a6").value = "";

}

function display() {

    var shp = localStorage.getItem("Shopping");
    var din = localStorage.getItem("Dining");
    var ent = localStorage.getItem("Entertainment");
    var groc = localStorage.getItem("Groceries");
    var alc = localStorage.getItem("Alcohol");
    var heal = localStorage.getItem("Health");
    var pt = localStorage.getItem("Pet");
    var gft = localStorage.getItem("Gift");
    //Displays the remaining budget and is actively deducted when user inputs an expense.
    document.getElementById("remaining_budget").innerHTML = "<h4 class='subtitle'> Remaining Budget:" + "<h2 class='title'>$" + localStorage.getItem("Biweekly") + "</h2>" + "</h4>";
    var d = new Date();
    var n = d.getDate();
    var sb = localStorage.getItem("Static-BiWeekly");
    //This will reset the value of Biweekly in localStorage to the static value assigned when you first setup your budget.
    if (n === 15 || n === 30 || n === 31) {
        localStorage.setItem("Biweekly", sb);
    } else {
        console.log("Not yet payday!");
    }

    //Come back to this and find a way to not display items that are null
    document.getElementById('exp_desc').innerHTML =
        "<nav class='level'>" +
        "<div class='level-item has-text-centered'>" +
        "<div>" + "<p class='heading'>" + "Shopping" + "</p>" +
        "<p class='title'>" + "$" + shp + "<p>" +
        "</div>" + "</div>" +
        "<div class='level-item has-text-centered'>" +
        "<div>" + "<p class='heading'>" + "Dining" + "</p>" +
        "<p class='title'>" + "$" + din + "<p>" +
        "</div>" + "</div>" +
        "<div class='level-item has-text-centered'>" +
        "<div>" + "<p class='heading'>" + "Entertainment" + "</p>" +
        "<p class='title'>" + "$" + ent + "<p>" +
        "</div>" + "</div>" +
        "<div class='level-item has-text-centered'>" +
        "<div>" + "<p class='heading'>" + "Groceries" + "</p>" +
        "<p class='title'>" + "$" + groc + "<p>" +
        "</div>" + "</div>" +
        "<div class='level-item has-text-centered'>" +
        "<div>" + "<p class='heading'>" + "Alcohol" + "</p>" +
        "<p class='title'>" + "$" + alc + "<p>" +
        "</div>" + "</div>" +
        "<div class='level-item has-text-centered'>" +
        "<div>" + "<p class='heading'>" + "Health" + "</p>" +
        "<p class='title'>" + "$" + heal + "<p>" +
        "</div>" + "</div>" +
        "<div class='level-item has-text-centered'>" +
        "<div>" + "<p class='heading'>" + "Pet" + "</p>" +
        "<p class='title'>" + "$" + pt + "<p>" +
        "</div>" + "</div>" +
        "<div class='level-item has-text-centered'>" +
        "<div>" + "<p class='heading'>" + "Gift(s)" + "</p>" +
        "<p class='title'>" + "$" + gft + "<p>" +
        "</div>" + "</div>"
    "</nav>"



    document.getElementById("shpPrg").value = localStorage.getItem("Shopping-Percent");
    document.getElementById("dinPrg").value = localStorage.getItem("Dining-Percent");
    document.getElementById("entPrg").value = localStorage.getItem("Entertainment-Percent");
    document.getElementById("grcPrg").value = localStorage.getItem("Groceries-Percent");
    document.getElementById("alcPrg").value = localStorage.getItem("Alcohol-Percent");
    document.getElementById("hlPrg").value = localStorage.getItem("Health-Percent");
    document.getElementById("ptPrg").value = localStorage.getItem("Pet-Percent");
    document.getElementById("gftPrg").value = localStorage.getItem("Gift-Percent");



}

//This stores the selection from the drop down menu and the value is the price entered.  This also deducts funds from the Biweekly Budget.  All of this can be seen live on the page and in localstorage.
function exp() {
    var cat = document.getElementById('a5').value;
    var price = document.getElementById('a6').value;
    var biweekly = localStorage.getItem("Biweekly");


    var shopping = document.getElementById("a5").options[0].text;
    var dining = document.getElementById("a5").options[1].text;
    var entertainment = document.getElementById("a5").options[2].text;
    var groceries = document.getElementById("a5").options[3].text;
    var alcohol = document.getElementById("a5").options[4].text;
    var health = document.getElementById("a5").options[5].text;
    var pet = document.getElementById("a5").options[6].text;
    var gift = document.getElementById("a5").options[7].text;

    var din = localStorage.getItem("Dining");
    var shp = localStorage.getItem("Shopping");
    var ent = localStorage.getItem("Entertainment");
    var groc = localStorage.getItem("Groceries");
    var alc = localStorage.getItem("Alcohol");
    var heal = localStorage.getItem("Health");
    var pt = localStorage.getItem("Pet");
    var gft = localStorage.getItem("Gift");

    var dinVal = +din + +price;
    var shpVal = +shp + +price;
    var entVal = +ent + +price;
    var grocVal = +groc + +price;
    var alcVal = +alc + +price;
    var healVal = +heal + +price;
    var petVal = +pt + +price;
    var giftVal = +gft + +price;

    var totalBiweekly = localStorage.getItem("Biweekly");
    var deduct = totalBiweekly - price;


    localStorage.setItem("Biweekly", deduct.toFixed(2));


    var statB = localStorage.getItem("Static-BiWeekly");


    switch (document.getElementById('a5').value) {
        case "shopping":
            localStorage.setItem(shopping, shpVal);
            localStorage.setItem("Shopping-Percent", (shp / statB * 100));
            break;
        case "dining":
            localStorage.setItem(dining, dinVal);
            localStorage.setItem("Dining-Percent", (din / statB * 100));
            break;
        case "entertainment":
            localStorage.setItem(entertainment, entVal);
            localStorage.setItem("Entertainment-Percent", (ent / statB * 100));
            break;
        case "groceries":
            localStorage.setItem(groceries, grocVal);
            localStorage.setItem("Groceries-Percent", (groc / statB * 100));
            break;
        case "alcohol":
            localStorage.setItem(alcohol, alcVal);
            localStorage.setItem("Alcohol-Percent", (alc / statB * 100));
            break;
        case "health":
            localStorage.setItem(health, healVal);
            localStorage.setItem("Health-Percent", (heal / statB * 100));
            break;
        case "pet":
            localStorage.setItem(pet, petVal);
            localStorage.setItem("Pet-Percent", (pt / statB * 100));
            break;
        case "gift":
            localStorage.setItem(gift, giftVal);
            localStorage.setItem("Gift-Percent", (gft / statB * 100));
            break;
    }



}


//changes the class name to "is-active" to enable tabs styling in Bulma

var budget = document.getElementById("budget");
var expenses = document.getElementById("expenses");

var bgt = document.getElementById("bgt");
var xpn = document.getElementById("xpn");

bgt.onclick = function() {
    bgt.classList.add('is-active');
    xpn.classList.remove('is-active');
    budget.classList.remove("invisible");
    expenses.classList.add("invisible");

}
xpn.onclick = function() {
    xpn.classList.add('is-active');
    bgt.classList.remove('is-active');
    expenses.classList.remove("invisible");
    budget.classList.add("invisible");
}


// function percent() {

//     var biweekly = localStorage.getItem("Biweekly");
//     var shp = localStorage.getItem("Shopping");
//     localStorage.setItem("Shopping-Percent", (shp / biweekly * 100));

// }