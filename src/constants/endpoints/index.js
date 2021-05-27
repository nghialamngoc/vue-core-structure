import { isProduction } from '@/helpers/env'
import * as DEV from './endpoints.dev'
import * as PROD from './endpoints.prod'

let endpoints = DEV

if (isProduction()) {
  endpoints = PROD
}

export default endpoints
