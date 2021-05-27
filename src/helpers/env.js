import { DEVELOPMENT, PRODUCTION } from '@/constants/env'

export const env = () => {
  return process.env.VUE_APP_ENV
}

/**
 * Check if current enviroment is development
 *
 * @returns {Boolean}
 */
export const isDevelopment = () => {
  return env() === DEVELOPMENT
}

/**
 * Check if current enviroment is production
 *
 * @returns {Boolean}
 */
export const isProduction = () => {
  return env() === PRODUCTION
}
