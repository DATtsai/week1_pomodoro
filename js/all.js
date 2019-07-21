// 倒數設定
let setTime = {minute: 0, second: 10};
let time = setTime;

let countBySecond = setInterval('countDown(time)', 1000);

function countDown(timeInput){

    let seconds = (timeInput.minute*60) + timeInput.second;
    
    if(!seconds){
        clearInterval(countBySecond);
        return;
    }

    time.minute = Math.floor((seconds-1)/60);
    time.second = (seconds-1)%60;
    console.log(time);
}



// 自動補左方0
function paddingLeft(str, length){
    if((''+str).length >= length){
        return;
    }else{
        return paddingLeft('0'+str, length);
    }
}





