import axios from '@/service/axios'
import ENDPOINTS from '@/constants/endpoints'
import { encrypt } from '@/helpers/hash'

/**
 * Login
 *
 * @param {Object} form
 * @return {Object}
 */

export const login = async (form) => {
  try {
    const { data } = await axios.post(ENDPOINTS.API_LOGIN, {
      data: encrypt({ ...form }),
    })

    return data
  } catch (error) {
    return Promise.reject(error)
  }
}
