var axios = require ('axios');

module.exports = {
  initialData: () => {
    return axios.get('people?_page=1&q=luke')
      .then(response => {
        return response
      })
      .catch(error => {
        console.log('error from api.js initialData', error)
        return error;
      })
  },
  userSearch: ( textToSearch, pageNumber ) => {
    return axios.get('people?_page=' + pageNumber+ '&q=' + textToSearch)
      .then(response => {
        return response
      })
      .catch(error => {
        console.log('error from api.js userSearch', error)
        return error;
      })
  },
  getAllPlanetsObject: () => {
    return axios.get("planets?id_gte=0")
      .then( response => {
        console.log('response in planetSearch api.js', response);
        return response
      })
      .catch(error => {
        console.log('error from api.js planetSearch', error)
        return error;
      })
  }
}
