const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

//fetchData();

axios.post('http://localhost:3000/api/echo', {
  message: 'Hello'
})
.then(res => {
  console.log(res.data);
})
.catch(err => {
  console.error(err);
});