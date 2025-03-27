//Chiedo quante tabelle vuole il giocatore
let input = parseInt(prompt("Quante tabelle vuoi creare?"));

//creo la tabella che genera i numeri da 1 a 99
const table = document.createElement("table");
function createTable() {
  let count = 1;
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
      if (count > 99) {
        break;
      }
      let column = document.createElement("td");
      column.textContent = count;
      row.appendChild(column);

      count++;
    }
    table.appendChild(row);
  }
  document.body.appendChild(table);
}
createTable();

//creo un array per tener conto dei numeri generati
let numeriGenerati = [];

//creo il bottone per l'estrazione casuale dei numeri
function generaNumeri() {
  let GeneraNumeri = Math.floor(Math.random() * 90 + 1);
  numeriGenerati.push(GeneraNumeri);
  console.log(GeneraNumeri);
}

document.querySelector("button").addEventListener("click", generaNumeri);

//creo la funzione per far illuminare le caselle
function illuminaCasella() {
  let cella = document.querySelectorAll("td");
  for (let i = 0; i < cella.length; i++) {
    if (numeriGenerati.includes(parseInt(cella[i].textContent))) {
      cella[i].classList.add("Selezionato");
    }
  }
}
document.querySelector("button").addEventListener("click", illuminaCasella);

//EXTRA
//Creo una tabella per il giocatore

function createPlayerTable() {
  const playerTable = document.createElement("table");
  let count = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
      if (count > 24) {
        break;
      }

      let column = document.createElement("td");
      column.textContent = Math.floor(Math.random() * 99 + 1);
      row.appendChild(column);
      count++;
    }

    playerTable.appendChild(row);
  }
  playerTable.classList.add("tabellaGiocatore");
  document.body.appendChild(playerTable);
}

for (let i = 0; i < input; i++) {
  createPlayerTable();
}
