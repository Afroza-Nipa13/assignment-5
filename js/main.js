const completeButtons =document.querySelectorAll(".complete-btn");
const currentIncreased =document.getElementById("increase-number");
const convertedIncreasedNumber = parseInt(currentIncreased.innerText);
const currentAssigned =document.getElementById("assigned");
const convertedAssignedNumber =parseInt(assigned.innerText);


for(let i = 0 ; i<completeButtons.length; i++ ){
    // console.log(completeButtons[i]);
    
    const completeButton =completeButtons[i];
    completeButton.addEventListener('click',function(event){
        // alert("Board Updated Successfully!");
     const title =event.target.id.replace("title-"," ");
     const valueOftitle =document.getElementById(title).innerText;
     console.log(valueOftitle);

     event.target.classList.add("bg-gray-700");
     event.target.classList.remove("bg-blue-700");
     const assignedSumNumber = convertedAssignedNumber - 1;
    const increasedSumNumber = convertedIncreasedNumber + 1;
    document.getElementById("increase-number").innerText= increasedSumNumber;
    document.getElementById("assigned").innerText = assignedSumNumber
 
   


     
     
    })
 }



//  id="increase-number" jei number er value barbe
// id="assigned" jei number er value kombe


