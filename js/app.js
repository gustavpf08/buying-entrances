function choosedEntrance() {
  let entrance = document.getElementById("tipo-ingresso");
  let index = entrance.selectedIndex;
  return index;
}

function gettingQuantity() {
  let quantity = document.getElementById("qtd").value;
  return quantity;
}

function calculation() {
  let laneQuantity = Number(document.getElementById("qtd-pista").textContent);
  let superiorChair = Number(
    document.getElementById("qtd-superior").textContent
  );
  let inferiorChair = document.getElementById("qtd-inferior").textContent;

  let entranceSelected = choosedEntrance();
  let quantitySelected = gettingQuantity();

  if (entranceSelected == 0) {
    inferiorChair -= quantitySelected;
    console.log(inferiorChair);
  }

  if (entranceSelected == 1) {
    superiorChair -= quantitySelected;
    console.log(superiorChair);
  }

  if (entranceSelected == 2) {
    laneQuantity -= quantitySelected;
    console.log(laneQuantity);
  }
}

function buyEntrance() {
  choosedEntrance();
  gettingQuantity();
  calculation();
}

document.addEventListener("keydown", function (e) {
  if (e.key === 13 || e.key === "Enter") {
    e.preventDefault();
    buyEntrance();
  }
});
