const pullDataBtn = document.querySelector(".btn");

pullDataBtn.addEventListener("click",() => {
    pullData();
})



async function pullData() {
const pulledData = await fetch("https://gist.githubusercontent.com/Alexandr-Zaburyannyi/ba8150b7428999fb93aa4497b2dc5c70/raw/f42aa3bb2f78bbcecf17c8895970ec24a02c150b/CRUD.json");
    const json = await pulledData.json();
    console.log(json);
}