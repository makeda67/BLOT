import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true
    })
  }

  signup(user) {
    const { name, username, password } = user;
    return this.auth.post('/auth/signup', {name, username, password})
      .then(({ data }) => data);
  }

  login(user) {
    const {username, password } = user;
    return this.auth.post('/auth/login', {username, password})
      .then(({ data }) => {
        return data});
  }

  logout() {
    return this.auth.post('/auth/logout')
      .then(response => response.data)
  }

  me() {
    return this.auth.get('/auth/me')
    .then(response => response.data)
  }
}

const authService = new AuthService();

export default authService;