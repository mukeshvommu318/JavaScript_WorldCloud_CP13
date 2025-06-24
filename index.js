let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];


let wordsContainerEle = document.getElementById("wordsContainerId")
let errorMsgEle = document.getElementById("errorId")
let inputEle = document.getElementById("inputId")
let btnElement = document.getElementById("btnId")


function addTheWord(item){
    let span = document.createElement("span")
    let randomNo = Math.ceil(Math.random()*60)
    span.textContent=item
    span.style.padding='10px'
    span.style.fontSize=randomNo+"px"
    wordsContainerEle.appendChild(span)
}
btnElement.onclick=function(){
    let inputValue = inputEle.value;

    if(inputValue ===""){
        errorMsgEle.textContent="Please Enter the Input"
    }
    else{
        addTheWord(inputValue)
    }
    inputEle.value=""

}

for (let each of wordCloud){
    addTheWord(each)
}