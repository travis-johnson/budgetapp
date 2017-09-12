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
    // var cat = document.getElementById('a5').value;
    // var shopping = document.getElementById("a5").options[0].text;
    // var dining = document.getElementById("a5").options[1].text;
    var price = document.getElementById('a6').value;
    var deduct = totalBiweekly - price;
    localStorage.setItem("Biweekly", deduct.toFixed(2));
    document.getElementById("remaining_budget").innerHTML = "<h3> Remaining Budget:  $" + localStorage.getItem("Biweekly") + "</h3>";
    // document.getElementById('exp_desc').innerHTML += '<span class="desc_text">' + desc + '</span>  ' + '  <span class="desc_text">$' + price + '</span>';


    //Try an If statement with the different categories.  Right now they are adding the price to all categories.


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

    //Come back to this and find a way to not display items that are null
    document.getElementById('exp_desc').innerHTML =
        "<li>Shopping $" + shp + "</li>" +
        "<li>Dining $" + din + "</li>" +
        "<li>Entertainment $" + ent + "</li>" +
        "<li>Groceries $" + groc + "</li>" +
        "<li>Alcohol $" + alc + "</li>" +
        "<li>Health $" + heal + "</li>" +
        "<li>Pet $" + pt + "</li>" +
        "<li>Gift $" + gft + "</li>";


    // var food = localStorage.getItem("Food");
    // var clothing = localStorage.getItem("Clothing");
    // document.getElementById('exp_desc').innerHTML = "<li>Food $" + food + "</li>" + "<li>Clothing $" + clothing + "</li>";

}

//This stores the selection from the drop down menu and the value is the price entered.  This also deducts funds from the Biweekly Budget.  All of this can be seen live on the page and in localstorage.
function exp() {
    var cat = document.getElementById('a5').value;
    var price = document.getElementById('a6').value;

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