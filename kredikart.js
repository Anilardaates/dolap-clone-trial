document.querySelector(".kart-number-input").oninput =()=>{
    document.querySelector(".kart-number-box").innerText = document.
    querySelector(".kart-number-input").value;
};
document.querySelector(".kart-holder-input").oninput=()=>{
    document.querySelector(".kart-holder-name").innerText=document.
    querySelector(".kart-holder-input").value;
};
document.querySelector(".month-input").oninput=()=>{
    document.querySelector(".exp-month").innerText=document.
    querySelector(".month-input").value + "/";
};
document.querySelector(".year-input").oninput=()=>{
    document.querySelector(".exp-year").innerText=document.
    querySelector(".year-input").value;
};
document.querySelector(".cvv-input").onmouseenter = () =>{
    document.querySelector(".back").style.transform="perspective(1000px) rotateY(0deg)";
};
document.querySelector(".cvv-input").onmouseleave = () =>{
    document.querySelector(".front").style.transform = "perspective(1000px) rotateY(0deg)";
    document.querySelector(".back").style.transform="perspective(1000px) rotateY(180deg)";
};
document.querySelector(".cvv-input").oninput=()=>{
    document.querySelector(".cvv-box").innerText=document.
    querySelector(".cvv-input").value;
};
