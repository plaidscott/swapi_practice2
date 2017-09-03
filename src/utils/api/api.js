var axios = require ('axios');

module.exports = {
  test: () => {
    return axios.get('people')
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log('error from api.js test', error)
        return error;
      })
  }
}
