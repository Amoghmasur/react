import React, { useEffect } from 'react';

function Amogh() {
  useEffect(() => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const listEl = document.querySelector("#tasks");

    const handleSubmit = (e) => {
      e.preventDefault();

      const task = input.value;

      const taskEl = document.createElement('p');
      taskEl.classList.add('task');

      const taskContentEl = document.createElement('p');
      taskContentEl.classList.add('content');

      taskEl.appendChild(taskContentEl);

      const taskInputEl = document.createElement('input');
      taskInputEl.classList.add('text');
      taskInputEl.type = 'text';
      taskInputEl.value = task;
      taskInputEl.setAttribute('readOnly', 'readOnly');

      taskContentEl.appendChild(taskInputEl);

      const taskActionsEl = document.createElement('p');
      taskActionsEl.classList.add('actions');

      const taskEditEl = document.createElement('button');
      taskEditEl.classList.add('edit');
      taskEditEl.innerText = 'Edit';

      const taskDeleteEl = document.createElement('button');
      taskDeleteEl.classList.add('delete');
      taskDeleteEl.innerText = 'Delete';

      taskActionsEl.appendChild(taskEditEl);
      taskActionsEl.appendChild(taskDeleteEl);

      taskEl.appendChild(taskActionsEl);

      listEl.appendChild(taskEl);

      input.value = '';

      taskEditEl.addEventListener('click', () => {
        if (taskEditEl.innerText.toLowerCase() === "edit") {
          taskEditEl.innerText = "Save";
          taskInputEl.removeAttribute("readOnly");
          taskInputEl.focus();
        } else {
          taskEditEl.innerText = "Edit";
          taskInputEl.setAttribute("readOnly", "readOnly");
        }
      });

      taskDeleteEl.addEventListener('click', () => {
        listEl.removeChild(taskEl);
      });
    };

    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return null;
}

export default Amogh;



