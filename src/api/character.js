import api from './api'

export default {
  async list (options) {
    return api.get('/character', { params: options })
  }
}
