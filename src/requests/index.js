import { GLOBAL_CONSTANTS } from '../constants'

const {
  API: { HEADERS },
} = GLOBAL_CONSTANTS
export const options = (url, method = 'GET', headers = {}) => ({
  method,
  url,
  headers: { ...HEADERS, ...headers },
})
