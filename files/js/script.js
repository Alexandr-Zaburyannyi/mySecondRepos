const pullDataBtn = document.querySelector(".btn");

const table = document.querySelector(".table");

const addRowButton = document.querySelector(".btn-success");

let arrayOfUsers = [];



pullDataBtn.addEventListener("click",async () => {
    pullDataBtn.classList.add('d-none');
    pullDataBtn.parentElement.classList.add('d-none');
    await pullData();
    addRowButton.classList.remove('d-none');
    arrayOfUsers.forEach(user => {
        table.insertAdjacentHTML("beforeend", 
        `<tr class="table-light">
            <th scope="row">${user.id}</th>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.email}</td>
            <td>${user.city}</td>
            <td>${user.company}</td>
            <td><button type="button" class="btn  btn-warning btn-sm">edit</button></td>
            <td><button type="button" class="btn btn-danger btn-sm">remove</button></td>
        </tr>`)
    });
    table.classList.remove('d-none');
});



async function pullData() {
const pulledData = await fetch("https://gist.githubusercontent.com/Alexandr-Zaburyannyi/ba8150b7428999fb93aa4497b2dc5c70/raw/f42aa3bb2f78bbcecf17c8895970ec24a02c150b/CRUD.json");
    const json = await pulledData.json();
    json.forEach(user => {
       arrayOfUsers.push(user);
    })
};