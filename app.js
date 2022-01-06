document.getElementById('formadd').addEventListener('submit',addExpense);
const expense =  JSON.parse(localStorage.getItem('expense')) || [];

function addExpense(e){
    e.preventDefault();

    let type = document.getElementById('type').value;
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let amount = document.getElementById('amount').value;
  const expenses ={
      type,
      name,
      date,
      amount,
      id:expense.length > 0 ? expense[expense.length - 1].id + 1 : 1,

  }
  if(type != 'selectOne'
  && name.length > 0 
        && date != 0 
        && amount > 0){
            expense.push(expenses);  
            localStorage.setItem('expense', JSON.stringify(expense));
  }
  document.getElementById('formadd').reset();
    showValue();
}
// console.log(expense)
const showValue = () => {
   const expenseTable = document.getElementById('expenseTable');
    expenseTable.innerHTML = '';
    for (let i = 0; i < expense.length; i++) {
        expenseTable.innerHTML += `<tr>
                                    <td>${expense[i].type}</td>
                                    <td>${expense[i].name}</td>
                                    <td>${expense[i].date}</td>
                                    <td>${expense[i].amount}</td>
                                    <td> <a class="deleteButton" onclick="deleteExpense(${expense[i].id})">
                     Delete</td>
            </tr> 
            `;

    }
    
    }
    const deleteExpense = (id) => {
        for(let i = 0; i < expense.length; i++){
            if(expense[i].id == id){
                expense.splice(i, 1);
            }
        }
        
        // localStorage
        localStorage.setItem('expense', JSON.stringify(expense));
        showValue();

}
showValue();