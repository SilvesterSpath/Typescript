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

    return `
      The Todo with ID: ${id}
      Has a title of: ${title}
      Is if finished? ${completed}
    `;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

(async () => {
  try {
    console.log(await fetchData());
  } catch (error) {
    console.log('An error occured: ', error);
  }
})();
