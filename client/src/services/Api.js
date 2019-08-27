const axios = require('axios')

export default() => {
  return axios.create({
    // baseURL: `http://84.201.158.214:8082/`  //for production
    baseURL: `http://localhost:8082/` // for developing
  })
}
