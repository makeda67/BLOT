import axios from 'axios';

class Army {

  constructor() {
    this.army = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true
    })
  }

  createArmy() {
      console.log('service')
    return this.army.post('/army/create')
      .then(({ data }) => data);
  }

  getArmy() {
    return this.army.get('/army/get')
      .then(({ data }) => data);
  }

  getPopulatedArmy() {
    return this.army.get('/army/populate')
      .then(({ data }) => data);
  }

  editArmy(army) {
    return this.army.put('/army/edit', army)
      .then(({ data }) => data);
  }

}

// Instance of the service
const army = new Army();

// Export the instance
export default army;