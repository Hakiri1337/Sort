



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function generete_items(){
    document.querySelector(".its").innerHTML="";

    let arr = [];
    let values = document.getElementById("values").value
 if(values > 50){
    confirm("Maksymalna liczba elementów to 50");
     values = 50;

 }
 if(values<=0){
    confirm("wpisz liczbe więszką od zera");
    values=0;
}


    for(let i=1; i<values*3; i+=3){
        let item = document.createElement('div');
        item.id=i;
        item.style.height=i+'px';
        item.style.width=10+'px';
        item.style.background='red';
        item.style.display='inline-block';
        item.style.border='1px solid black';
        arr.push(item);
    }
    
    
  
      
         shuffleArray(arr);

        return arr.forEach(element => {
        document.querySelector(".its").appendChild(element);
    }
  
    );   


}   
const elems = document.querySelector('.its').children;



const convertToArray = () => {
    const shapesHC = document.querySelector('.its').children;
    const shapesArrHCSpread = [...shapesHC];
    return shapesArrHCSpread;
}

const timer = ms => new Promise(res => setTimeout(res, ms))


//timer2 i timer  to to samo tylko timer jest czytelniejszy
// const timer2 = function timer(ms){
//     return new Promise(function result(res){ 
//         return setTimeout(res,ms) 
//     })
// }

//timer2 i timer  to to samo tylko timer jest czytelniejszy
const timer2 = function timer(ms){
    return new Promise( (resolve) => { 
        console.log(ms);
            resolve("this is from promise")
    })
 }

timer2().then((response)=>{console.log(response)})

let number = document.querySelector(".iterations");

async function bubbleSort(){
    let numberOfIteration = 0;
      
    let tab = convertToArray();
    let len = tab.length-1;
    
    for (let i = 0; i <= len; i++) {
        for (let j = 0; j <len; j++) {
           
            if (tab[j].clientHeight > tab[j + 1].clientHeight) {

                let tmp = tab[j].style.height;
           
                tab[j].style.height = tab[j + 1].style.height;
                tab[j + 1].style.height = tmp;
                number.innerHTML = numberOfIteration;
                numberOfIteration++;
            
                await timer(20)
            }
                
                
            }
           
        }
    
    }
 
 

function removeAllChildNodes() {
    parent=document.querySelector(".its");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


let button = document.getElementById("generate");
button.addEventListener("click",generete_items);

let button2 = document.querySelector("#sorter");
button2.addEventListener("click",bubbleSort);



