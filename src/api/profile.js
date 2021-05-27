import axios from '@/service/axios'
import ENDPOINTS from '@/constants/endpoints'
import Profile from '@/models/profile'

export const getProfile = async () => {
  try {
    const user = await axios.get(ENDPOINTS.API_GET_PROFILE)
    return new Profile({
      ...user,
    })
  } catch (error) {
    return Promise.reject(error)
  }
}
