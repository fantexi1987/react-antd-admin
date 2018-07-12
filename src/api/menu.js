import fetch from '../utils/fetch';

export function getAllMenuFn() {
  return fetch({
    url: '/menu',
    method: 'get'
  })
}

export function getChildRoutesFn() {
  return fetch({
    url: '/getChildRoutes',
    method: 'get'
  })
}
