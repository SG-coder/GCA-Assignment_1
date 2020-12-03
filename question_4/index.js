function calculate(){
    let total = document.getElementById("total").value;
    let tip = document.getElementById("tip").value;
    let ans = document.getElementById("ans")
    let gTotal = parseInt((total * .01 * tip)) + parseInt(total);
    ans.innerHTML = `
        <p>Your total :${total}</p>
        <p>Tip : ${tip}</p>
        <p>You have to give: ${gTotal}</p>
    `;
}

function clearAll(){
    total.value = ""
    tip.value = ""
    ans.innerHTML = ""
}