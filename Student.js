let selectedRow = null;
const btnUp = document.querySelector(".btnup");
const btnAdd = document.querySelector(".btnadd");
btnAdd.addEventListener("click", function () {
  const name = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const Gender = document.querySelector("#gender").value;
  const Email = document.querySelector("#email").value;
  const Province = document.querySelector("#province").value;

  if (!name || !age || !Gender || !Email || !Province) {
    alert("Please fill in all fields!!!");
    return;
  }

  const table = document
    .querySelector("table")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);
  const cell6 = newRow.insertCell(5);

  cell1.innerHTML = name;
  cell2.innerHTML = age;
  cell3.innerHTML = Gender;
  cell4.innerHTML = Email;
  cell5.innerHTML = Province;

  cell6.innerHTML = `<button onclick="editRow(this)" class="btn btn-primary">Edit</button>
                 <button onclick="deleteRow(this)"  class="btn btn-danger">Delete</button>`;

  document.getElementById("information").reset();
});

function editRow(td) {
  selectedRow = td.parentElement.parentElement;
  document.querySelector("#name").value = selectedRow.cells[0].innerHTML;
  document.querySelector("#age").value = selectedRow.cells[1].innerHTML;
  document.querySelector("#gender").value = selectedRow.cells[2].innerHTML;
  document.querySelector("#email").value = selectedRow.cells[3].innerHTML;
  document.querySelector("#province").value = selectedRow.cells[4].innerHTML;

  document.querySelector("form button[type=button]").style.display = "none";
  document.querySelector("form button").style.display = "";
}

btnUp.addEventListener("click", function () {
  const name = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const Gender = document.querySelector("#gender").value;
  const Email = document.querySelector("#email").value;
  const Province = document.querySelector("#province").value;

  selectedRow.cells[0].innerHTML = name;
  selectedRow.cells[1].innerHTML = age;
  selectedRow.cells[2].innerHTML = Gender;
  selectedRow.cells[3].innerHTML = Email;
  selectedRow.cells[4].innerHTML = Province;

  document.querySelector("#information").reset();

  selectedRow = null;
});
function deleteRow(td) {
  if (confirm("Are you sure you want to delete?")) {
    const row = td.parentElement.parentElement;
    document.querySelector("table").deleteRow(row.rowIndex);
  }
}
