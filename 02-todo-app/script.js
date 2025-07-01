const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


const todo = () => {
   const task = taskInput.value;
   const li = document.createElement('li');
   const deleteBtn = document.createElement('button');
   const completeBtn = document.createElement('button');
   const i = document.createElement('i');

   if (taskInput.value === "") {
      alert('Please enter a task!');
   } else {
      // This adds the value of the input to the list
      li.textContent = task;

      // this is to insert the li element inside the ul#task-input
      taskList.appendChild(li);
      li.appendChild(deleteBtn);
      li.appendChild(completeBtn);
      deleteBtn.classList.add('delete-btn');
      deleteBtn.appendChild(i);
      i.classList.add('fa-solid');
      i.classList.add('fa-trash');
      completeBtn.classList.add('complete-btn');
      completeBtn.append('✓');
   };

   deleteBtn.addEventListener('click', () => {
      li.remove();
   });

   completeBtn.addEventListener('click', () => {
      li.style.textDecoration = 'line-through';
   });

};

addBtn.addEventListener('click', () => {
   todo();
   taskInput.value = "";
});