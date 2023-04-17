import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response = await axios.get(
      'http://jsonplaceholder.typicode.com/todos/1'
    );

    const todo = response.data as Todo;
    const { id, title, completed } = todo;

    logTodo(id, title, completed);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is if finished? ${completed}
`);
};

(async () => {
  try {
    await fetchData();
  } catch (error) {
    console.log('An error occured: ', error);
  }
})();
