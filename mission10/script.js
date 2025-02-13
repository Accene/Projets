document.getElementById("ajouter-ligne").addEventListener("click", function() {
    let table = document.getElementById("facture").getElementsByTagName('tbody')[0];
    let newRow = table.rows[0].cloneNode(true);
    newRow.querySelector(".desc").value = "";
    newRow.querySelector(".qte").value = "1";
    newRow.querySelector(".prix").value = "1";
    newRow.querySelector(".total").textContent = "0";
    table.appendChild(newRow);
});

document.getElementById("remplir-auto").addEventListener("click", function() {
    let descriptions = ["Produit A", "Produit B", "Service X", "Service Y"];
    let lignes = document.querySelectorAll(".ligne");
    lignes.forEach(ligne => {
        ligne.querySelector(".desc").value = descriptions[Math.floor(Math.random() * descriptions.length)];
        ligne.querySelector(".qte").value = Math.floor(Math.random() * 10) + 1;
        ligne.querySelector(".prix").value = Math.floor(Math.random() * 100) + 1;
    });
});

document.getElementById("calculer").addEventListener("click", function() {
    let sousTotal = 0;
    let lignes = document.querySelectorAll(".ligne");
    lignes.forEach(ligne => {
        let qte = parseFloat(ligne.querySelector(".qte").value);
        let prix = parseFloat(ligne.querySelector(".prix").value);
        let total = qte * prix;
        ligne.querySelector(".total").textContent = total.toFixed(2);
        sousTotal += total;
    });

    let remise = parseFloat(document.getElementById("remise").value) / 100;
    let taxe = parseFloat(document.getElementById("taxe").value) / 100;
    let frais = parseFloat(document.getElementById("frais").value);

    let totalRemise = sousTotal - (sousTotal * remise);
    let totalTaxe = totalRemise * taxe;
    let soldeFinal = totalRemise + totalTaxe + frais;

    document.getElementById("sous-total").textContent = sousTotal.toFixed(2);
    document.getElementById("remise-total").textContent = totalRemise.toFixed(2);
    document.getElementById("taxe-total").textContent = totalTaxe.toFixed(2);
    document.getElementById("solde").textContent = soldeFinal.toFixed(2);
});
