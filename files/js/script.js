const pullDataBtn = document.querySelector(".btn");

const table = document.querySelector(".table");

let arrayOfUsers = [];



pullDataBtn.addEventListener("click",() => {
    table.classList.remove('d-none');
    pullData();
    arrayOfUsers.forEach(user => {
        table.insertAdjacentHTML("beforeend", 
        `<tr class="table-light">
                <th scope="row">${user.id}</th>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.email}</td>
                <td>${user.city}</td>
                <td>${user.company}</td>
                <td></td>
                <td></td>
            </tr>
        `)
    })
    // let firstUser = arrayOfUsers[0];
    // console.log(firstUser)
})



async function pullData() {
const pulledData = await fetch("https://gist.githubusercontent.com/Alexandr-Zaburyannyi/ba8150b7428999fb93aa4497b2dc5c70/raw/f42aa3bb2f78bbcecf17c8895970ec24a02c150b/CRUD.json");
    const json = await pulledData.json();
    json.forEach(user => {
       arrayOfUsers.push(user);
    })
}