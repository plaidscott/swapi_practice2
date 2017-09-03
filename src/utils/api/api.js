var axios = require ('axios');

module.exports = {
  test: () => {
    return axios.get('people')
      .then(response => {
        console.log('response.data from api.js, test', response.data);
        return response.data
      })
      .catch(error => {
        console.log('error from api.js test', error)
        return error;
      })
  }
}
