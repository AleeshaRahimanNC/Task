
    let num = prompt("Enter a Number:");
    console.log("Factors of this given num is:")
    for (let i=1;i<=num;i++){
        if(num%i ===0){
            console.log(i);
        }
    }
