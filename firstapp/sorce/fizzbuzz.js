const fizzbuzz ={
    result: "",
    Check(number){
        this.result="";//初期化
        if(number%3==0||number%5==0){
            if(number%3==0){
                this.result = this.result + "fizz";
                
            }
            if(number%5==0){
                this.result= this.result + "buzz";
            }
            return this.result;
        }else{
            return number;
        }
    }
};

for(i=1;i<=100;i++){
    console.log(fizzbuzz.Check(i));
}