const myInput = document.getElementById("inputbox");


function appendToDisplay(input){

    myInput.value += input ;
}

function calculate(){
    myInput.value = eval(myInput.value);
}

    

function remove(){
    myInput.value = "";
}
