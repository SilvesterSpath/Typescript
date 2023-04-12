import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get(
      'http://jsonplaceholder.typicode.com/todos/1'
    );

    return response.data;
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
