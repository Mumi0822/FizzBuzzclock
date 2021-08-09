const fizzbuzz ={
    result: "",
    Check(number){
        this.result="";//初期化
        if(number%3==0||number%5==0){
            this.result =  number%3==0 ? this.result + "fizz":this.result;
            this.result =  number%5==0 ? this.result + "buzz":this.result;
            return this.result;
        }else{
            AddZero(number);
            this.result = number;
            console.log("AddZero");
            return this.result;
            
        }
    }
};
const AddZero = function(number){
    number = number < 10 ? "0" + number : number;
        return number;
};
const Clock = function(){
    const d = new Date();
    //年月日を取得
    let year = d.getFullYear();
    let month = d.getMonth()+1;
    let date = d.getDate();

    // 時分秒を取得
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
  
    // fizzbuzzCheckと校正
    let fbhour = fizzbuzz.Check(hour);
    let fbmin = fizzbuzz.Check(min);
    let fbsec = fizzbuzz.Check(sec);
    
    month = AddZero(month);
    date  = AddZero(date);
    hour  = AddZero(hour);
    min   = AddZero(min);
    sec   = AddZero(sec);
  
    // 時刻の文字列を作成
    const fbTime  = `${fbhour}:${fbmin}:${fbsec}`;
    const fullDate= `${year}/${month}/${date}`; 
    const fullTime= `${hour}:${min}:${sec}`;
    document.querySelector("#clock-time").innerText = fbTime;                                                                  
    document.querySelector("#fullClock").innerText = fullTime;
    document.querySelector("#fullDate").innerText = fullDate;
    

};
const TimeStamp = function(){
    window.alert(`TimeStamp : ${document.getElementById("clock-time").innerText}`);
}
setInterval(Clock, 1000);      