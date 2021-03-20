import 'regenerator-runtime/runtime'
import axios from 'axios'

// GET....
const BASE_URL = "https://api.vschool.io/mark.olivo/todo";

const getTodoItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);

    const todoItems = response.data;
    
    console.log(`GET: Here's the list of todos`, todoItems);

    return todoItems;
  } catch(error) {
    console.error(error);
  }
};



const createTodoElement = item => {
  const todoElement = document.createElement('li');
  todoElement.id = item._id;
  
  todoElement.appendChild(document.createTextNode(item.title));
  todoElement.appendChild(document.createTextNode(item.description));

  const button = document.createElement("button")
  button.textContent= "X"
  todoElement.append(button)
  todoElement.id = item._id;
  
  button.onclick = async event => await removeTodoElement(event, todoElement);
  

  
  return todoElement;

  
};

const updateTodoList = todoItems => {
  const todoList = document.querySelector('ul');

  if (Array.isArray(todoItems) && todoItems.length > 0) {
    todoItems.map(todoItem => {
      todoList.appendChild(createTodoElement(todoItem));
    });
  } else if (todoItems) {
    todoList.appendChild(createTodoElement(todoItems));
  }
};

const main = async () => {
  updateTodoList(await getTodoItems());
};

main();



const form = document.querySelector('form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const title = document.querySelector('#new-todos__title').value;
  const description = document.querySelector('#newDescrip').value;
  const price = document.querySelector('#newPrice').value;


  const todo = {
    userId: 1,
    title: title,
    description: description,
    price: price,
    completed: false
  };

  const submitTodoItem = await addTodoItem(todo);
  updateTodoList(submitTodoItem);
});

// Post...

export const addTodoItem = async todo => {
  try {
    const response = await axios.post(`${BASE_URL}`, todo);
    const newTodoItem = response.data;

    console.log(`Added a new Todo!`, newTodoItem);

    return newTodoItem;
  } catch (error) {
    console.error(error);
  }
};


// Delete...
export const deleteTodoItem = async id => {
  try {
    console.log("id", id)
    const response = await axios.delete(`${BASE_URL}/${id}`);
    console.log(`Deleted Todo ID: `, id);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};



  export const removeTodoElement = async (event, element) => {
  console.log("element", element)
  event.target.parentElement.parentElement.removeChild(element);
  const id = element.id;
console.log("id",id)
  await deleteTodoItem(id);
};


// export const createTodoElement = item => {
  // const todoElement = document.createElement('li');

//   todoElement.id = item.id;
//   todoElement.appendChild(document.createTextNode(item.title));

//   todoElement.onclick = async event => await removeTodoElement(event, todoElement);

//   return todoElement;
// };

