function calculer() {
    var  prix1 = document.getElementById("prix1").value;
    var quantite1 = document.getElementById("quantite1").value;
    var prix2 = document.getElementById("prix2").value;
    var quantite2 = document.getElementById("quantite2").value;
    var prix3 = document.getElementById("prix3").value;
    var quantite3 = document.getElementById("quantite3").value;

    var result1 = prix1 * quantite1;
    var result2 = prix2 * quantite2;
    var result3 = prix3 * quantite3;

    document.getElementById("result1").innerHTML = result1;
    document.getElementById("result2").innerHTML = result2;
    document.getElementById("result3").innerHTML = result3;

    let total = result1 + result2 + result3;
    document.getElementById("total").innerHTML = total;
}

function reinitialiser() {
    document.getElementById("prix1").value = "";
    document.getElementById("quantite1").value = "";
    document.getElementById("prix2").value = "";
    document.getElementById("quantite2").value = "";
    document.getElementById("prix3").value = "";
    document.getElementById("quantite3").value = "";

    document.getElementById("result1").innerHTML = "0";
    document.getElementById("result2").innerHTML = "0";
    document.getElementById("result3").innerHTML = "0";
    document.getElementById("total").innerHTML = "0";
}
