




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
        item.style.background='linear-gradient(315deg, #05e8ba 0%, #087ee1 74%)';
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



const convertToArray = () => {
    const shapesHC = document.querySelector('.its').children;
    const shapesArrHCSpread = [...shapesHC];
    return shapesArrHCSpread;
}

const timer = ms => new Promise(res => setTimeout(res, ms))




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
            
                await timer(50)
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


let button2 = document.getElementById("sorter");
let SELECTED_SORT = document.getElementById("sort");


function bogoSort(){
    console.log("smth")
}


button2.addEventListener("click",sort)


function sort(){
    let SELECTED_SORT = document.getElementById("sort");
    if(SELECTED_SORT.selectedIndex==0){
        bubbleSort()
    }
    else if(SELECTED_SORT.selectedIndex==1){
        console.log("dupa 1")
    }
    else if(SELECTED_SORT.selectedIndex==2){
        mergeSort(convertToArray())
    }
    else if(SELECTED_SORT.selectedIndex==3){
        console.log("dupa 3")
    }

}

 function mergeSort (unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);
  
    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
  
    // Using recursion to combine the left and right
 
    return merge(
       mergeSort(left), mergeSort(right) 
     
    );
  }

    function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex].clientHeight < right[rightIndex].clientHeight) {
        resultArray.push(left[leftIndex]);
        leftIndex++; 
       // move left array cursor
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
  
      }
     
    }
  
    // We need to concat here because there will be one element remaining
    // from either left OR the right    
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }

    

    
       
       
    
    

    






