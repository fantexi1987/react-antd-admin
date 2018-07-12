import fetch from '../utils/fetch';

export function fetchProfileFn() {
  return fetch({
    url: '/my',
    method: 'get'
  })
}

export function loginFn(user, password) {
  return fetch({
    url: '/login',
    method: 'put',
    data: {
      user: user,
      password: password
    }
  }) 
}

export function logoutFn() {
  return fetch({
    url: '/logout',
    method: 'get'
  })
}
