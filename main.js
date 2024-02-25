const todoInput = document.querySelector('.container .header input');
const todoList = document.querySelector('.container .todo-list');

const isCheck = document.querySelector('.check');

let list = [];



const AddBtn = document.querySelector('.container .header button').onclick =  (e) => {
  const todo = document.querySelector('.container .header input').value;


  console.log(todo);
      
  
  completeTodo();
   if (todo) {
    list.unshift(`
  <div class="list">
  <div>
      <input class="check"  type="checkbox">
      <label>${todoInput.value}</label>
      </div>
      <button>Delete</button>
  </div>

  `
    )
    todoList.innerHTML = list.join('');

   }


   completeTodo();
   deleteBtn();
   
}

const completeTodo = () => {
  document.querySelectorAll('.list input').forEach((checkButton) => {
      checkButton.onclick = (e) => {
          if (checkButton.checked) {
              e.target.setAttribute('checked', '');
              e.target.parentElement.parentElement.classList.add('complete');
          }
          else {
              e.target.removeAttribute('checked');
              e.target.parentElement.parentElement.classList.remove('complete');
          }
      }
  });
}


const deleteBtn = () => {
  document.querySelectorAll('.list button').forEach((deleteButton) => {
    deleteButton.onclick = (e) => {
          e.target.closest('.list').remove();
      }
  });
}

