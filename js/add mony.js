// step-1
document.getElementById("Add-Money").addEventListener('click',function(event){
    event.preventDefault();
    console.log("Button clicked")

    // step-2
    const inputAddMoney = document.getElementById("Input-Add-Money").value;
    console.log(inputAddMoney);
    const pinNumber = document.getElementById("pin-number").value;
    console.log(pinNumber);
    // step-3
    if(pinNumber === '1234' ){
        console.log("Pin is correct");

        // step-4
        const ResultAmount =document.getElementById("result-amount").innerText;
        console.log(ResultAmount);
        // step-5                               
        const totalInput = parseFloat(inputAddMoney);
        const totalResult = parseFloat(ResultAmount);
        const total = totalInput + totalResult;
        console.log(total)
        // console.log(totalResult,totalInput);

        // step-6
        document.getElementById('result-amount').innerText = total;
    }
    else{
        alert("Pin is incorrect");
    }
})