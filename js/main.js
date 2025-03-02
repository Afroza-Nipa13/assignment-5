document.getElementById("complete-btn-1").addEventListener('click', function(){
    const currentIncreased =document.getElementById("increase-number");
    const currentAssigned =document.getElementById("assigned");
    currentAssigned.innerText = 5; 
    currentIncreased.innerText = 24;
    const newAssinged = currentAssigned.innerText;
    const newIncreased =currentIncreased.innerText;
    const title =document.getElementById('title-1').innerText;
const history = document.getElementById('history');
const p= document.createElement("p");
p.innerText = `
You have completed the task ${title} at 1:26:53 AM. 


`
history.appendChild(p);
})

document.getElementById("complete-btn-2").addEventListener('click', function() {
    const currentIncreased =document.getElementById("increase-number");
    const currentAssigned =document.getElementById("assigned");
    currentAssigned.innerText = 4; 
    currentIncreased.innerText = 25;
    const newAssinged = currentAssigned.innerText;
    const newIncreased =currentIncreased.innerText;
    const title =document.getElementById('title-2').innerText;
const history = document.getElementById('history');
const p= document.createElement("p");
p.innerText = `
You have completed the task ${title} at 1:26:53 AM. 


`
history.appendChild(p);
})   

document.getElementById("complete-btn-3").addEventListener('click', function() {
    const currentIncreased =document.getElementById("increase-number");
    const currentAssigned =document.getElementById("assigned");
    currentAssigned.innerText = 3; 
    currentIncreased.innerText = 26;
    const title =document.getElementById('title-3').innerText;
    const history = document.getElementById('history');
    const p= document.createElement("p");
    p.innerText = `
    You have completed the task ${title} at 1:26:53 AM. 
    
    
    `
    history.appendChild(p);
})   

document.getElementById("complete-btn-4").addEventListener('click', function() {
    const currentIncreased =document.getElementById("increase-number");
    const currentAssigned =document.getElementById("assigned");
    currentAssigned.innerText = 2; 
    currentIncreased.innerText = 27;
    const title =document.getElementById('title-4').innerText;
    const history = document.getElementById('history');
    const p= document.createElement("p");
    p.innerText = `
    You have completed the task ${title} at 1:26:53 AM. 
    
    
    `
    history.appendChild(p);
})   


document.getElementById("complete-btn-5").addEventListener('click', function() {
    const currentIncreased =document.getElementById("increase-number");
    const currentAssigned =document.getElementById("assigned");
    currentAssigned.innerText = 1; 
    currentIncreased.innerText = 28;
    const title =document.getElementById('title-5').innerText;
    const history = document.getElementById('history');
    const p= document.createElement("p");
    p.innerText = `
    You have completed the task ${title} at 1:26:53 AM. 
    
    
    `
    history.appendChild(p);
})   


document.getElementById("complete-btn-6").addEventListener('click', function() {
    const currentIncreased =document.getElementById("increase-number");
    const currentAssigned =document.getElementById("assigned");
    currentAssigned.innerText = 0; 
    currentIncreased.innerText = 27;
    const title =document.getElementById('title-6').innerText;
    const history = document.getElementById('history');
    const p= document.createElement("p");
    p.innerText = `
    You have completed the task ${title} at 1:26:53 AM. 
    
    
    `
    history.appendChild(p);
})   

document.getElementById("clear").addEventListener('click',function(){
    document.getElementById("history").innerHTML=" ";
})











     


