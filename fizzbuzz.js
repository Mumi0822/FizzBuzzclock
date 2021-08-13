
const fizzbuzz ={
//FizzBuzz用オブジェクト
    result: "",//⇒返り値。Checkの結果を入れる
    Check(number){
        //初期化
        this.result="";
        if(number%3==0||number%5==0){
            //FizzBuzz変換あり
            this.result =  number%3==0 ? this.result + "Fizz":this.result;
            this.result =  number%5==0 ? this.result + "Buzz":this.result;
            return this.result;
        }else{
            //FizzBuzz変換なし
            number = this.AddZero(number);
            this.result = number;
            console.log("AddZero");
            return this.result;
            
        }
    },
    AddZero(index){
    //一桁であれば0をつける　例：1→01
        index = index < 10 ? "0" + index : index;
        return index;
    }
};

const Clock = function(){
    const d = new Date();
    //const f = new fizzbuzz;
    //年月日を取得
    let year = d.getFullYear();
    let month = d.getMonth()+1;
    let date = d.getDate();

    // 時分秒を取得
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
  
    let fbhour = fizzbuzz.Check(hour);
    let fbmin = fizzbuzz.Check(min);
    let fbsec = fizzbuzz.Check(sec);
    
    month = fizzbuzz.AddZero(month);
    date  = fizzbuzz.AddZero(date);
    hour  = fizzbuzz.AddZero(hour);
    min   = fizzbuzz.AddZero(min);
    sec   = fizzbuzz.AddZero(sec);
  
    // FizzBuzzの時計
    const fbTime  = `${fbhour}:${fbmin}:${fbsec}`;
    //普通の時計
    const fullTime= `${hour}:${min}:${sec}`;
    //年月日
    const fullDate= `${year}/${month}/${date}`;
    document.getElementById("clock-time").innerText = fbTime;                                                                  
    document.getElementById("fullClock").innerText = fullTime;
    document.getElementById("fullDate").innerText = fullDate;
    

};
const TimeStamp = function(){
    //
    window.alert(`TimeStamp : ${document.getElementById("clock-time").innerText}`);
}
setInterval(Clock, 1000);      