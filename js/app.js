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

function verifyingQuantity() {
  let choosedQuantity = gettingQuantity();

  choosedQuantity != 0
    ? calculation()
    : alert("Por favor, selecione pelo menos 1 ingresso para comprar.");
}

function calculation() {
  let inferior = document.getElementById("qtd-inferior");
  let superior = document.getElementById("qtd-superior");
  let lane = document.getElementById("qtd-pista");

  let entranceSelected = choosedEntrance();
  let quantitySelected = gettingQuantity();

  if (entranceSelected == 0) {
    if (inferiorEntrance[inferiorEntrance.length - 1] <= 0) {
      return alert("Ingressos esgotados para essa região.");
    }

    let inferiorChair =
      inferiorEntrance[inferiorEntrance.length - 1] - quantitySelected;
    inferiorEntrance.push(inferiorChair);
    inferior.textContent = inferiorChair;
  }

  if (entranceSelected == 1) {
    if (superiorEntrance[superiorEntrance.length - 1] <= 0) {
      return alert("Ingressos esgotados para essa região.");
    }

    let superiorChair =
      superiorEntrance[superiorEntrance.length - 1] - quantitySelected;
    superiorEntrance.push(superiorChair);
    superior.textContent = superiorChair;
  }

  if (entranceSelected == 2) {
    if (laneEntrance[laneEntrance.length - 1] <= 0) {
      return alert("Ingressos esgotados para essa região.");
    }

    let laneChair = laneEntrance[laneEntrance.length - 1] - quantitySelected;
    laneEntrance.push(laneChair);
    lane.textContent = laneChair;
  }
}

function buyEntrance() {
  verifyingQuantity();
}

document.addEventListener("keydown", function (e) {
  if (e.key === 13 || e.key === "Enter") {
    e.preventDefault();
    buyEntrance();
  }
});
