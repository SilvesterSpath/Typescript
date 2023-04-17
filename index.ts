import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get(
      'http://jsonplaceholder.typicode.com/todos/1'
    );

    const todo = response.data;
    const { ID, Title, finished } = todo;

    return `
      The Todo with ID: ${ID}
      Has a title of: ${Title}
      Is if finished? ${finished}
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
