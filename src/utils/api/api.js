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
  },
  userSearch: ( textToSearch ) => {
    console.log('textToSearch in api', textToSearch);
    return axios.get('people?q=' + textToSearch)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log('error from api.js userSearch', error)
        return error;
      })
  }
}
