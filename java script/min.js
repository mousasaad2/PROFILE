let sp = document.querySelectorAll(".sp2")
let spans = document.querySelectorAll(".spp")
let old = document.querySelector(".oold")
let school = document.querySelector(".school")
let contee = document.querySelector(".contee")
let contenirCarde = document.querySelector(".cards")
let cardes = document.querySelectorAll(".card")
let icon = document.querySelector(".icon")
let icons = document.querySelectorAll(".icon span")
let ul = document.querySelector(".ul")
let text = document.querySelector(".add-text")

//__________________Start style icon______________________
icon.addEventListener("click",function(){
    ul.classList.toggle("block")
    icons.forEach((span,ind) =>{
        if(ind == 0){
            span.classList.toggle("span1");
        }else if(ind == 1){
            span.classList.toggle("span2");
        }else if(ind == 2){
            span.classList.toggle("span3");
        }
    })
})
//__________________End style icon______________________

let arr = [
    "Mousa Saad",
    "Front End Developer"
];
let contar = 0;
let contar2 = 0;

function addText(){
    text.innerHTML += arr[contar2][contar]
    contar ++ 
    if(contar > arr[contar2].length){
        text.innerHTML = ""
        contar2 ++
        contar = 0
    }
    if(contar2 > arr.length-1){
        contar2 = 0
    }
}
setInterval(addText, 250)






//__________________Start Lop in card push class css______________________

    cardes.forEach((el, ind) => {
        if (ind % 2 === 0) {
            el.classList.add("test1")
        } else {
            el.classList.add("test2")
        }
    });
//__________________End Lop in card push class css______________________


//______________________{ Start scroll window}_____________________________

window.onscroll = function () {
    //__________________style old_____________________________
    if (window.scrollY >= old.offsetTop - 500) {
        sp.forEach((div) => {
            div.style.setProperty('--beforeWidth', div.dataset.width)
            spans.forEach((span) => {
                span.innerHTML = span.parentElement.dataset.width
            })
        })
    } else {
        sp.forEach((div) => {
            div.style.setProperty('--beforeWidth', "0")
            spans.forEach((span) => {
                span.innerHTML = ""
            })
        })
    }//End________

    //____________style school__________________________________

    if (window.scrollY >= school.offsetTop -500) {
        contee.classList.remove("shox")
    } else {
        contee.classList.add("shox")
    }//End__________

    //_____________Style cardes_________________________________

    cardes.forEach((el, ind) => {
        if (window.scrollY >= el.offsetTop - 500) {
            if (ind % 2 === 0) {
                el.classList.remove("test1")
            } 
            else {
                el.classList.remove("test2")
            }
        }else{
            // el.classList.add("test1")
            // el.classList.add("test2")
        }
    });
    //End_________
}
//______________________{ End scroll window}_____________________________