let p = document.querySelector("#ans");

function calcCircumfrence(radius){
    return 2 * Math.PI * radius
}

function clearAll(){
    p.innerHTML="";
    document.getElementById('radius').value = "";
}

function calculate(){
    let radius = document.getElementById('radius').value; 
    if (radius === ""){
        p.textContent = "Invalid Number !"
    }else{
    let ans = calcCircumfrence(radius)
    p.innerHTML = `The circumference is ${Math.round(ans)}`;
}
}

