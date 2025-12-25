amt=document.getElementById("amt")
 let cat=document.getElementById("category")
  let btn=document.getElementById("exp") 
    let container = document.getElementById("container"); 
let totaldiv=document.getElementById("total")
let del=document.getElementById("del")


let expenses=[]

let saveexp=localStorage.getItem("expenses")
if(saveexp){
    expenses=JSON.parse(saveexp)
    ShowExpenses()
}


btn.addEventListener("click", function() {
    
    let amtvalue = amt.value;
    let catvalue = cat.value;

    console.log("Amount:", amtvalue);
    console.log("Category:", catvalue);

console.log(amtvalue,catvalue)

let now=new Date()
let dateTime=now.toLocaleString()



    let expense = {
        amount: amtvalue,
        category: catvalue,
        time:dateTime,
    };




let amount=Number(amtvalue)

    if(amtvalue===""|| catvalue===""){
    alert("enter details")
    return //agar return satisft kardega tab push nhi hoga
    }
    else if(isNaN(amount)){
    alert("Amount must be number")
 return
}


// let amount=Number(amtvalue)
// if(isNaN(amount)){
//     alert("Amount must be number")
// return
// }





expenses.push(expense);
// expenses.push({
//     amount:amtvalue,
//     category:catvalue,
// })


localStorage.setItem("expenses",JSON.stringify(expenses))




 


container.innerHTML = "";


    let totalAmount=0;
for(let i=0;i<expenses.length;i++){
    totalAmount+=parseFloat(expenses[i].amount);
}
totaldiv.innerText=`Total:₹${totalAmount}`

ShowExpenses();
  
amt.value = "";
cat.value = "";

  }
);

function ShowExpenses(){
    container.innerHTML=""
    let totalAmount=0

for(let i=0;i<expenses.length;i++){
    let expDiv=document.createElement("div")
expDiv.innerHTML=`

<span class="amount">Amount:₹${expenses[i].amount}</span>
<button class="deletebtn" onclick="deleteExpenses(${i})">del</button>
<span class="category">Category:${expenses[i].category}</category>
<span class="time">Time:${expenses[i].time}</span>
`

container.appendChild(expDiv)
totalAmount+=parseFloat(expenses[i].amount)

}
totaldiv.innerText=`Total: ${"₹"+totalAmount}`

}
function deleteExpenses(index){
    expenses.splice(index,1);
localStorage.setItem("expenses",JSON.stringify(expenses))
    ShowExpenses()
}

del.addEventListener("click",function(){
    expenses.length=0
    totalAmount=0

localStorage.setItem("expenses",JSON.stringify(expenses))
    ShowExpenses()
})