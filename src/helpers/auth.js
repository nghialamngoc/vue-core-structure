import Cookies from 'js-cookie'

const TOKEN_KEY = 'ff83a1098f2c2b04577784712aa633a6'

/**
 * Set access token
 *
 */
export const setToken = (token) => {
  return Cookies.set(TOKEN_KEY, token)
}

/**
 * Remove access token
 *
 */
export const removeToken = () => {
  return Cookies.remove(TOKEN_KEY)
}

/**
 * Get access token
 *
 * @returns {String}
 */
export const getToken = (remove = false) => {
  const token = Cookies.get(TOKEN_KEY)

  if (remove) {
    removeToken()
  }

  return token
}
