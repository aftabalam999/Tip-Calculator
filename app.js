const formElem = {
  totalAmount: document.querySelector("#amount"),
  tipPercent: document.querySelector("#tip-percent"),
  totalPerson: document.querySelector("#person"),
  submitBtn: document.querySelector("#submitBtn"),
};

const outputElem = {
  tipPerPersonVal: document.querySelector("#tip-per-person"),
  totalPerPersonVal: document.querySelector("#total-per-person"),
  resetBtn: document.querySelector("#resetBtn"),
};

let p = document.createElement("P");
p.textContent = "Enter a positive number";
p.classList.add("wrong-input");

formElem.submitBtn.addEventListener("click", () => {
  if (
    formElem.totalAmount.value > 0 &&
    formElem.tipPercent.value > 0 &&
    formElem.totalPerson.value > 0
  ) {
    calculateTip(
      Number(formElem.totalAmount.value),
      Number(formElem.tipPercent.value),
      Number(formElem.totalPerson.value),
    );
  } else {
    showError();
    return;
  }
});
outputElem.resetBtn.addEventListener("click", () => {
  formElem.totalAmount.value = "";
  formElem.tipPercent.value = "";
  formElem.totalPerson.value = "";
  outputElem.tipPerPersonVal.textContent = `₹ 0`;
  outputElem.totalPerPersonVal.textContent = `₹ 0`;
});

const calculateTip = (total, tip, person) => {
  const tipPerPerson = ((total * tip) / 100 / person).toFixed(2);
  const totalPerPerson = (total / person + Number(tipPerPerson)).toFixed(2);
  showResult(tipPerPerson, totalPerPerson);
};
const showResult = (tipPerPerson, totalPerPerson) => {
  outputElem.tipPerPersonVal.textContent = `₹ ${tipPerPerson}`;
  outputElem.totalPerPersonVal.textContent = `₹ ${totalPerPerson}`;
};

const showError = () => {
  p.classList.remove("hidden");
  formElem.totalPerson.after(p);
  setTimeout(() => {
    p.classList.add("hidden");
  }, 2000);
};
