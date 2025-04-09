let inferiorEntrance = [400];
let superiorEntrance = [200];
let laneEntrance = [100];

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
  let entranceSelected = choosedEntrance();
  let quantitySelected = gettingQuantity();

  if (entranceSelected == 0) {
    let inferiorChair =
      inferiorEntrance[inferiorEntrance.length - 1] - quantitySelected;
    inferiorEntrance.push(inferiorChair);
    console.log(inferiorEntrance);
  }

  if (entranceSelected == 1) {
    let superiorChair =
      superiorEntrance[superiorEntrance.length - 1] - quantitySelected;
    superiorEntrance.push(superiorChair);
    console.log(superiorEntrance);
  }

  if (entranceSelected == 2) {
    let laneChair = laneEntrance[laneEntrance.length - 1] - quantitySelected;
    laneEntrance.push(laneChair);
    console.log(laneEntrance);
  }
}

function buyEntrance() {
  calculation();
}

document.addEventListener("keydown", function (e) {
  if (e.key === 13 || e.key === "Enter") {
    e.preventDefault();
    buyEntrance();
  }
});
