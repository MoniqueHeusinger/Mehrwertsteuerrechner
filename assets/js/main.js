"use strict";

const addTax = document.body.querySelector("#addTax");
const subTax = document.body.querySelector("#subTax");
const tax19 = document.body.querySelector("#tax19");
const tax7 = document.body.querySelector("#tax7");
const inputAmountLabel = document.body.querySelector("#inputAmountLabel");
const inputAmount = document.body.querySelector("#inputAmount");
const submitBtn = document.body.querySelector("#submit");
const resultTaxOutput = document.body.querySelector("#resultTaxOutput");
const resultTotalLabel = document.body.querySelector("#resultTotalLabel");
const resultTotalOutput = document.body.querySelector("#resultTotalOutput");

const grossNetChangeText = () => {
    if (subTax.checked === true && addTax.checked === false) {
            inputAmountLabel.innerHTML = "Bruttobetrag (Preis inkl. Mehrwertsteuer) in Euro<span class='red'>*</span>";
    }   else if (subTax.checked === false && addTax.checked === true) {
            inputAmountLabel.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro<span class='red'>*</span>";
    }
}
subTax.addEventListener("click", grossNetChangeText);
addTax.addEventListener("click", grossNetChangeText);


    const resultTax = () => {
        // 19% MwSt
        if (addTax.checked && tax19.checked) {
            let calcNetPlus19 = inputAmount.value * 0.19;
            resultTaxOutput.innerHTML = calcNetPlus19.toFixed(2).concat(" €");

            let calcGross19 = inputAmount.value * 1.19;
            resultTotalOutput.innerHTML = calcGross19.toFixed(2).concat(" €");

            
        }   else if (subTax.checked && tax19.checked) {
            let calcGrossMinus19 = inputAmount.value / 119 * 19;
            resultTaxOutput.innerHTML = calcGrossMinus19.toFixed(2).concat(" €");

            let calcNet19 = inputAmount.value / 1.19;
            resultTotalOutput.innerHTML = calcNet19.toFixed(2).concat(" €");
            resultTotalLabel.innerText = "Nettobetrag";

                
        }
        // 7% MwSt
            else if (addTax.checked && tax7.checked){
                let calcNetPlus7 = inputAmount.value * 0.07;
                resultTaxOutput.innerHTML = calcNetPlus7.toFixed(2).concat(" €");
                
                let calcGross7 = inputAmount.value * 1.07;
                resultTotalOutput.innerHTML = calcGross7.toFixed(2).concat(" €");

                
        }      else if (subTax.checked && tax7.checked) {
                    let calcGrossMinus7 = inputAmount.value / 107 * 7;
                    resultTaxOutput.innerHTML = calcGrossMinus7.toFixed(2).concat(" €");

                    let calcNet7 = inputAmount.value / 1.07;
                    resultTotalOutput.innerHTML = calcNet7.toFixed(2).concat(" €");
                    resultTotalLabel.innerText = "Nettobetrag";
        }
}
    submitBtn.addEventListener("click", resultTax);