import api from '@/utils/api'

export function getUserById (id) {
  return api.get(`/api/users/${id}`)
}

export function addUser (params) {
  return api.post(`/api/users`, params)
}

export function updateUserById (id, params) {
  return api.put(`/api/users/${id}`, params)
}

export function deleteUserById (id) {
  return api.delete(`/api/users/${id}`)
}
