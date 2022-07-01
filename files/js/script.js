const pullDataBtn = document.querySelector(".btn");

const table = document.querySelector(".table");

const tableRows =  document.getElementsByClassName('.table-light');

const addRowButton = document.querySelector(".btn-success");

const addRowSubmitButton = document.querySelector("#submit-new-row");

const editRowSubmitButton = document.querySelector("#submit-changes");

const removeRowButtons = document.getElementsByClassName('btn-danger');

const editRowButtons = document.getElementsByClassName('btn-warning');

const inputGroup = document.querySelectorAll("[aria-label=info]");

const userInfoCell = document.getElementsByClassName('user-info-cell');

let arrayOfUsers = [];



pullDataBtn.addEventListener("click",async () => {
    pullDataBtn.classList.add('d-none');
    pullDataBtn.parentElement.classList.add('d-none');
    await pullData();
    addRowButton.classList.remove('d-none');
    arrayOfUsers.forEach(user => {
        table.insertAdjacentHTML("beforeend", 
        `<tr class="table-light" id="${user.id}">
            <th scope="row">${user.id}</th>
            <td class="user-info-cell">${user.first_name}</td>
            <td class="user-info-cell">${user.last_name}</td>
            <td class="user-info-cell">${user.email}</td>
            <td class="user-info-cell">${user.city}</td>
            <td class="user-info-cell">${user.company}</td>
            <td><button type="button" class="btn btn-warning btn-sm">edit</button></td>
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



addRowButton.addEventListener('click' , () => {
    inputGroup.forEach(input => {
        input.classList.toggle('d-none');
    });
    addRowSubmitButton.classList.toggle('d-none');
    editRowSubmitButton.classList.add('d-none');
    for (input of inputGroup) {
        input.value = "";
    }
});



addRowSubmitButton.addEventListener('click', () => {

table.insertAdjacentHTML('beforeend',
    `<tr class="table-light" id="${arrayOfUsers.length + 1}">
    <th scope="row">${arrayOfUsers.length + 1}</th>
        <td class="user-info-cell">${document.getElementById('name').value}</td>
        <td class="user-info-cell">${document.getElementById('surname').value}</td>
        <td class="user-info-cell">${document.getElementById('email').value}</td>
        <td class="user-info-cell">${document.getElementById('city').value}</td>
        <td class="user-info-cell">${document.getElementById('company').value}</td>
        <td><button type="button" class="btn btn-warning btn-sm">edit</button></td>
        <td><button type="button" class="btn btn-danger btn-sm">remove</button></td>
    </tr>`);

    arrayOfUsers.length++; 
    inputGroup.forEach(input => {
        input.classList.toggle('d-none');
    })
    addRowSubmitButton.classList.add('d-none');
});



table.addEventListener('click' , () => {
    for (let i = 0; i < arrayOfUsers.length; i++) {
        if(event.target === removeRowButtons[i]) {
            removeRowButtons[i].parentElement.parentElement.remove();
        };
    };
});

let positions;

table.addEventListener('click', () => {
   for(button of editRowButtons){
        if (event.target === button) {
        addRowSubmitButton.classList.add('d-none');

        editRowSubmitButton.classList.toggle('d-none');

        let children =  button.parentElement.parentElement.getElementsByClassName('user-info-cell');

        positions = children;

        editData(children);

        inputGroup.forEach(input => {
            input.classList.toggle('d-none');
        });
        }
    }
});



function editData(tableRow) {
        for (var i = 0; i < inputGroup.length; i++) {
            inputGroup[i].value = tableRow[i].innerHTML;
        }
};



editRowSubmitButton.addEventListener('click' , () => {
    for (var i = 0; i < inputGroup.length; i++) {
        positions[i].innerText = inputGroup[i].value;
    }
    inputGroup.forEach(input => {
        input.classList.toggle('d-none');
    });
    editRowSubmitButton.classList.add('d-none');
});