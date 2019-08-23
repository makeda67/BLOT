import axios from 'axios';

class Army {

  constructor() {
    this.army = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true
    })
  }

  createArmy(army) {
    return this.army.post('/army/create')
      .then(({ data }) => data);
  }

  getArmy(armyId) {
    return this.army.get(`/army/${armyId}/get`)
      .then(({ data }) => data);
  }

  getAllArmies() {
    return this.army.get('/army/get')
      .then(({ data }) => data);
  }

  getPopulatedArmy() {
    return this.army.get('/army/populate')
      .then(({ data }) => data);
  }

  editArmy(army, id) {
    console.log(army)
    return this.army.put(`army/edit/${id}`, army)
      .then(({ data }) => data);
  }

  deleteOneArmy(id) {
    return this.army.delete(`/army/${id}/delete`)
    .then(({ data }) => data);
};
getMyArmy(){
  return this.army.get(`/army/getMyArmy`)
    .then(({ data }) => data);
}

}

const army = new Army();

export default army;