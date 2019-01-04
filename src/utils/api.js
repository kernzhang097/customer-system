import instance from './request'

const http = {
  get (url, params = {}) {
    return instance.get(url, {params})
      .then(res => res)
      .catch(error => error)
  },
  post (url, params) {
    return instance.post(url, params)
      .then(res => res)
      .catch(error => error)
  },
  put (url, params) {
    return instance.put(url, params)
      .then(res => res)
      .catch(error => error)
  },
  delete (url, params) {
    return instance.delete(url, {params})
      .then(res => res)
      .catch(error => error)
  }
}

export default http
