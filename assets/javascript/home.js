//Correcting the date format for task card
let date = document.getElementsByClassName("dateLabel");
for(let i=0; i<date.length; i++){
    let str = date[i];
    if(str.innerText == ""){
        str.innerText = "No Deadline";
    }else{
        let stringD = str.innerText;
        let day = stringD.slice(0,3);
        let dateF = stringD.slice(4,15);
        str.innerText = (day+", "+dateF);
    }
}

//Setting up different colors for categories
let categories = document.getElementsByClassName("categoryLabelC");
for(let i=0; i<categories.length; i++){
    let ctg = categories[i];
    if(ctg.innerText == "PERSONAL"){
        ctg.style.backgroundColor = "darkgreen";

    }else if(ctg.innerText == "SCHOOL"){
        ctg.style.backgroundColor = "#F2A701";

    }else if(ctg.innerText == "WORK"){
        ctg.style.backgroundColor = "purple";

    }else if(ctg.innerText == "CLEANING"){
        ctg.style.backgroundColor = "darkblue";

    }
}

//Setting up priority in task-cards
let priorities = document.getElementsByClassName("priorityLabel");
for(let i=0; i<priorities.length; i++){
    let p = priorities[i];
    let ctr = 0;   //counter for stars to be added according to priority
    if(p.innerText == "Low"){
        ctr = 1;
    }
    else if(p.innerText == "Medium"){
        ctr = 2;
    }
    else if(p.innerText == "High"){
        ctr = 3;
    }
    p.innerText = "Priority: ";
    //Adding required stars in the tasks card as per the priority level
    while(ctr-- > 0){
        let node = document.createElement("I");
        node.classList.add("fas");
        node.classList.add("fa-star");
        node.classList.add("star");
        p.appendChild(node);
    }
}

