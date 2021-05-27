import axios from 'axios'
import startsWith from 'lodash/startsWith'
import { getToken } from '@/helpers/auth'
import { extractFileNameFromHeader } from '@/helpers/api'

// create new axios instance
const instance = axios.create()

// replace param in url
const replaceUrlParams = (config) => {
  const data = {
    ...config.data,
    ...config.params,
  }
  let url = config.url

  Object.keys(data).forEach((key) => {
    url = url.replace(`{${key}}`, data[key])
  })

  return url
}

// add a request interceptor
instance.interceptors.request.use((config) => {
  // mocking test on prodution env
  if (startsWith(config.url, '/static/api/')) {
    // set prefix for api request
    config.baseURL = process.env.BASE_URL
    // change body data to query params
    if (config.data && typeof config.data === 'object') {
      config.params = { ...config.params, ...config.data }
    }
    // change method
    config.method = 'GET'
  }

  // token
  const token = getToken()
  if (token && !config.anonymous) {
    config.headers['Authorization'] = 'Bearer ' + token
  }

  // replace url param
  config.url = replaceUrlParams(config)

  return config
})

// add a response interceptor
instance.interceptors.response.use(
  async (response) => {
    const { data, headers, config } = response

    // handle blob response
    if (data instanceof Blob) {
      return {
        data: data,
        fileName: extractFileNameFromHeader(headers),
      }
    }

    // extract data
    return config.raw ? response : data
  },
  async (error) => {
    return Promise.reject(error)
  }
)

export default instance
