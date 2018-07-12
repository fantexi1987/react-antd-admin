const user = {'name': 'admin', 'role': 'ADMIN', 'uid': 1};

export default {
  login: config => {
    let postData = JSON.parse(config.body);
    if (postData.user === 'admin' && postData.password === '123456') {
      return user;
    } else {
      return null;
    }
  },
  logout: config => {
    return null;
  },
  fetchProfile: config => {
    return user;
  }
};
