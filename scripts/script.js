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
    var z = 0;
    var shp = localStorage.getItem("Shopping");
    var din = localStorage.getItem("Dining");
    var ent = localStorage.getItem("Entertainment");
    var groc = localStorage.getItem("Groceries");
    var alc = localStorage.getItem("Alcohol");
    var heal = localStorage.getItem("Health");
    var pt = localStorage.getItem("Pet");
    var gft = localStorage.getItem("Gift");
    var sb = localStorage.getItem("Static-BiWeekly");

    var shpTitle = document.getElementById('shp-title');
    var dinTitle = document.getElementById('din-title');
    var entTitle = document.getElementById('ent-title');
    var grocTitle = document.getElementById('groc-title');
    var alcTitle = document.getElementById('alc-title');
    var healTitle = document.getElementById('heal-title');
    var petTitle = document.getElementById('pt-title');
    var giftTitle = document.getElementById('gft-title');

    //Displays the remaining budget and is actively deducted when user inputs an expense.
    document.getElementById("remaining_budget").innerHTML = "<h4 class='subtitle'> Remaining Budget:" + "<h2 class='title'>$" + localStorage.getItem("Biweekly") + "</h2>" + "</h4>";
    var d = new Date();
    var n = d.getDate();
    var dtp = 15 - n;

    //This will reset the value of Biweekly in localStorage to the static value assigned when you first setup your budget.
    if (n === 15 || n === 30 || n === 31) {
        localStorage.setItem("Biweekly", sb);

    } else {
        console.log("Not yet payday!");
    }

    if (dtp == 1) {
        document.getElementById("daystogo").innerHTML = "<h4 class='subtitle'> Day until payday:" + "<h2 class='title'>" + dtp + "</h2>" + "</h4>";
    } else if (dtp === 0) {
        document.getElementById("daystogo").innerHTML = "<h2 class='title'>It's PAYDAY!!!" + "</h2>";

    } else {
        document.getElementById("daystogo").innerHTML = "<h4 class='subtitle'> Days until payday:" + "<h2 class='title'>" + dtp + "</h2>" + "</h4>";

    }







    // document.getElementById('exp_desc').innerHTML =
    //     "<nav class='level'>" +
    //     "<div class='level-item has-text-centered'>" +
    //     "<div>" + "<p class='heading'> Shopping </p>" +
    //     "<p id='shp-title' class='title'>" + "$" + shp + "<p>" +
    //     "</div>" + "</div>" +
    //     "<div class='level-item has-text-centered'>" +
    //     "<div>" + "<p class='heading'>Dining</p>" +
    //     "<p id='din-title' class='title'>" + "$" + din + "<p>" +
    //     "</div>" + "</div>" +
    //     "<div class='level-item has-text-centered'>" +
    //     "<div>" + "<p class='heading'> Entertainment </p>" +
    //     "<p id='ent-title' class='title'>" + "$" + ent + "<p>" +
    //     "</div>" + "</div>" +
    //     "<div class='level-item has-text-centered'>" +
    //     "<div>" + "<p class='heading'>Groceries</p>" +
    //     "<p id='groc-title' class='title'>" + "$" + groc + "<p>" +
    //     "</div>" + "</div>" +
    //     "<div class='level-item has-text-centered'>" +
    //     "<div>" + "<p class='heading'>Alcohol</p>" +
    //     "<p id='alc-title' class='title'>" + "$" + alc + "<p>" +
    //     "</div>" + "</div>" +
    //     "<div class='level-item has-text-centered'>" +
    //     "<div>" + "<p class='heading'>Health</p>" +
    //     "<p id='heal-title' class='title'>" + "$" + heal + "<p>" +
    //     "</div>" + "</div>" +
    //     "<div class='level-item has-text-centered'>" +
    //     "<div>" + "<p class='heading'>Pet</p>" +
    //     "<p id='pt-title' class='title'>" + "$" + pt + "<p>" +
    //     "</div>" + "</div>" +
    //     "<div class='level-item has-text-centered'>" +
    //     "<div>" + "<p class='heading'>Gift(s)</p>" +
    //     "<p id='gft-title' class='title'>" + "$" + gft + "<p>" +
    //     "</div>" + "</div>"
    // "</nav>"



    // this looks for non-existent objects in localstorage and replaces it with the string $0 until an expense value is entered into the app. However, this is not working and will only display $0 or null while not replacing those values with the actual value in localstorage.
    shpTitle.innerHTML = "$" + shp;
    dinTitle.innerHTML = "$" + din;
    entTitle.innerHTML = "$" + ent;
    grocTitle.innerHTML = "$" + groc;
    alcTitle.innerHTML = "$" + alc;
    healTitle.innerHTML = "$" + heal;
    petTitle.innerHTML = "$" + pt;
    giftTitle.innerHTML = "$" + gft;





    //Calculates the percentage of each expense and stores it in a graphical chart.
    localStorage.setItem("Shopping-Percent", (shp / sb * 100).toFixed(0));

    localStorage.setItem("Dining-Percent", (din / sb * 100).toFixed(0));

    localStorage.setItem("Entertainment-Percent", (ent / sb * 100).toFixed(0));

    localStorage.setItem("Groceries-Percent", (groc / sb * 100).toFixed(0));

    localStorage.setItem("Alcohol-Percent", (alc / sb * 100).toFixed(0));

    localStorage.setItem("Health-Percent", (heal / sb * 100).toFixed(0));

    localStorage.setItem("Pet-Percent", (pt / sb * 100).toFixed(0));

    localStorage.setItem("Gift-Percent", (gft / sb * 100).toFixed(0));



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


    //This portion adds the expense to the appropriate category and then stores the object in localstorage.

    switch (document.getElementById('a5').value) {
        case "shopping":
            localStorage.setItem(shopping, shpVal);
            break;
        case "dining":
            localStorage.setItem(dining, dinVal);
            break;
        case "entertainment":
            localStorage.setItem(entertainment, entVal);
            break;
        case "groceries":
            localStorage.setItem(groceries, grocVal);
            break;
        case "alcohol":
            localStorage.setItem(alcohol, alcVal);
            // localStorage.setItem("Alcohol-Percent", (alc / statB * 100));
            break;
        case "health":
            localStorage.setItem(health, healVal);
            break;
        case "pet":
            localStorage.setItem(pet, petVal);
            break;
        case "gift":
            localStorage.setItem(gift, giftVal);
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