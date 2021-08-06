const fizzbuzz ={
    result: "",
    Check(number){
        this.result="";//初期化
        if(number%3==0||number%5==0){
            this.result =  number%3==0 ? this.result + "fizz":this.result;
            this.result =  number%5==0 ? this.result + "buzz":this.result;
            return this.result;
        }else{
            number = number < 10 ? "0" + number : number;
            return number;
        }
    }
};
const Clock = function(){
    const d = new Date();
    // 時を取得
    let hour = d.getHours();
    // 分を取得
    let min = d.getMinutes();
    // 秒を取得
    let sec = d.getSeconds();
  
    // 1桁の場合は0を足して2桁に
    hour = fizzbuzz.Check(hour);
    min = fizzbuzz.Check(min);
    sec = fizzbuzz.Check(sec);
  
    // 日付・時刻の文字列を作成
    let time = `${hour}:${min}:${sec}`;
    document.querySelector(".clock-time").innerText = time;
};
setInterval(Clock, 1000);


