function calculateTip() {
  // steps 1 → 4 go here
let amt=document.getElementById("bill").value;
let tipper=document.getElementById("tip").value;
amt=Number(amt);
tipper=Number(tipper);
let tips=(amt*tipper)/100;
let total=(amt+tips);
document.getElementById("tip-amount").innerText=tips;
document.getElementById("total-amount").innerText=total;

}

