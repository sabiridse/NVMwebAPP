const axios = require('axios')
export default() => {
  return axios.create({
  	//baseURL: `http://84.201.158.214:9092/` // for production
  	//baseURL: `http://84.201.158.214:9082/` // for production GUESTS
    baseURL: `http://localhost/`  //for local developing GUESTS (dev  dev) 80 port
    //baseURL: `http://localhost:9092/` // for local developing (crash data)
  })
}
