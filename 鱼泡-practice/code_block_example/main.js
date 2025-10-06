"use strict"

let calc_btn = document.getElementById("action");
calc_btn.addEventListener("click", analyze);

let reset_btn = document.getElementById("reset");
reset_btn.addEventListener("click", reset);

function analyze() {
    

    let a = Number(document.getElementById("a").value);
    let b = document.getElementById("b").value;
    
    output("First form value: " + a);
    output("Second form value: " + b);
    
    if (a>b) {
        output("First form value was bigger");
    }
    
    if (a<b) {
        output("Second form value was bigger");
    }
    
    if (a==b) {
        output("The two form values were the same");
    }
    
}

function reset() {
    let o = document.getElementById("output");
    while (o.childNodes.length > 3) { // includes button text
        let aNode = o.lastChild;
        if (aNode.id != "reset") {
            o.removeChild(aNode);
        }
    }
    o.style.display = "none";
    let i = document.getElementById("input");
    i.style.display = "block";
}

function output(t) {
    if (t == undefined) {
        console.log("WARNING: You did not provide anything to output");
    } else {
        let p = document.createElement("p");
        let tn = document.createTextNode(t);
        p.appendChild(tn);
        let o = document.getElementById("output");
        o.appendChild(p);
        o.style.display = "block";
        let i = document.getElementById("input");
        i.style.display = "none";
    }
}
