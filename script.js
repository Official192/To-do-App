const input = document.querySelector("#input");
const con = document.querySelector(".container");

function add() {

    const write = input.value;  

    if(input.value === "") return;

    input.value = "";

    createsElement(write);
}


function createsElement(write) {

    const li = document.createElement("li");
    li.className = "listing";

    let textSpan = document.createElement("span");
    textSpan.textContent = write;
    textSpan.style.flex = "1";
    textSpan.style.textAlign = "center";
    textSpan.style.textDecoration = 'none';

    const deletebtn = document.createElement("button");
    deletebtn.innerHTML = `<i style="font-size: large;" class='mt-1 mb-0 bx  bx-trash' style='color:#059c28'></i>`;
    deletebtn.className = "btn btn-outline-danger";
    deletebtn.style.marginLeft = "10px";
    deletebtn.style.margin = "0";

    var donebtn = document.createElement("button");
    donebtn.innerHTML = `<i style="font-size: large;" class='bx bx-check mt-1 mb-0' style='color:#059c28'></i> `;
    donebtn.className = "btn btn-outline-success";
    donebtn.style.marginLeft = "10px";
    donebtn.style.margin = "0";
    

    donebtn.addEventListener("click",()=> {

          if (textSpan.style.textDecoration === "none") {
            textSpan.style.textDecoration = "line-through";
            textSpan.style.opacity = "0.5";
        }
       });
   

   
    li.appendChild(donebtn);
    li.appendChild(textSpan);
    li.appendChild(deletebtn);

     con.appendChild(li);

    deletebtn.onclick = ()=> {
        li.remove();
    };

}