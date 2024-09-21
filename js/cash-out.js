// step-1
document.getElementById("cash-out-btn").addEventListener('click',function(event){
    event.preventDefault();
    console.log("Button clicked")

    // step-2
    const inputCashOut = document.getElementById("Input-cash-out").value;
    console.log(inputCashOut);
    const pinNum = document.getElementById("pin-numbers").value;
    console.log(pinNum);
    // step-3
    if(pinNum === '1234' ){
        console.log("Pin is correct");

        // step-4
        const ResultAmount = document.getElementById("result-amount").innerText;
        console.log(ResultAmount);
        // step-5                               
        const totalInput = parseFloat(inputCashOut);
        const totalResult = parseFloat(ResultAmount);
        const total = totalResult - inputCashOut;
        console.log(total)


        // step-6
        document.getElementById('result-amount').innerText = total;
    }
    else{
        alert("Pin is incorrect");
    }
})