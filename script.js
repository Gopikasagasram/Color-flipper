const sec = document.querySelector("section");
const p = sec.querySelector("p");
const button = sec.querySelector("button");

const colorArray = [
     "#ff0000","#e5d0ff","pink","#ffff00","rgb(255,165,0)","blue","rgb(0,255,0)","brown"];
     

function colorChange() {
    let value = Math.floor(Math.random() * 8);
    sec.style.backgroundColor = colorArray[value];
    let result = document.getElementById("p").innerHTML;
    let text = result.slice(0,16);
    document.getElementById("p").innerHTML = text+" "+colorArray[value];
}

button.addEventListener("click",colorChange);
