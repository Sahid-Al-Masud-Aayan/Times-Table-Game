let numbox = document.querySelector('.numbox')
let clickMe = document.querySelector('.click')
let resultBox = document.querySelector('.resultbox')

clickMe .addEventListener('click', ()=>{
    if(numbox.value==''){
        alert("Please enter a number first")
    }else{
        for(let a = 1; a<11; a++){
            resultBox.innerHTML += numbox.value + ' X ' + a + ' = ' + numbox.value*a + '<br>'
        }
    }
})