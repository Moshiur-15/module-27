document.getElementById("Add-Money-btn").addEventListener('click',function(){
    const addMony = document.getElementById("mony-container").classList.remove("hidden");
    const outMony = document.getElementById("out-container").classList.add("hidden");
    console.log(addMony,outMony)
});

document.getElementById("Cash-Out-btn").addEventListener('click',function(){
    const addMony = document.getElementById("mony-container").classList.add("hidden");
    const outMony = document.getElementById("out-container").classList.remove("hidden");
    console.log(addMony,outMony)
});