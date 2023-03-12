// let str = "#3"


const square = $('.sq');
const timer = document.getElementById("timer")
// const score = $("#score")
const sqr = document.getElementById("score")
const st = document.getElementById("Start")
const end = document.getElementById("Stop")


let result = 0
let box 
let currentTime = 60
let timerId = null
let countDownTimerId
let ed =0 

function selectSquare(){

    for(let i=1; i<=9; i++){
        let x = "#" +i
        const tg = $(x).find('i');
        tg.removeClass("fa-solid fa-bowling-ball fa-5x fa-cog");
    }

    box = Math.floor(Math.random() * 9)
    let randomSelection = "#"+box;
    const target = $(randomSelection).find('i');
    target.addClass("fa-solid fa-bowling-ball fa-5x fa-cog");
}

// selectSquare()

Array.prototype.forEach.call(square, id => {
    id.addEventListener('click', () =>{
        let s = ""+ id.id
        
        if(s==box){
            result++;
            let r = "" + result
            sqr.textContent = r
            
        }
    })
    
});





function countDown() {
    selectSquare()
    currentTime--
    timer.textContent = currentTime
    if (currentTime == 0) {
      clearInterval(countDownTimerId)
      clearInterval(timerId)
      alert('GAME OVER! Your final score is ' + result)
      ed = 1;
    }
    if(ed === 1){
        st.disabled = false;
        currentTime = 60;
        ed =0;
        return;
    }
}

st.addEventListener('click', ()=>{
    st.disabled = true;
    currentTime = 60;
    countDownTimerId = setInterval(countDown, 1000)
    
})

end.addEventListener('click', ()=>{
    st.disabled = false;
    currentTime = 1;
    ed = 1;
    countDownTimerId = countDown()
})


//    let countDownTimerId = setInterval(countDown, 1000)