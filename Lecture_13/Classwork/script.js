function addCount() {
    let ptag = document.getElementById("count");
    let pTagValue = Number(ptag.innerText);

    console.log(pTagValue);
    let nextValue = pTagValue+1
    ptag.innerHTML = "<b>" + nextValue + "</b>";

    if (nextValue < 0 || nextValue > 5) {
        ptag.style.color = "red";
    } else { 
        ptag.style.color = "black";
    }

}

function lowCount() {
    let ptag = document.getElementById("count");
    let pTagValue = Number(ptag.innerText);

    console.log(pTagValue);
    let nextValue = pTagValue-1
    ptag.innerHTML = "<b>" + nextValue + "</b>";

    if (nextValue < 0 || nextValue > 5) {
        ptag.style.color = "red";
    } else { 
        ptag.style.color = "black";
    }
    
}

