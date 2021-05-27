import { isProduction } from '@/helpers/env'
import * as DEV from './keys.dev'
import * as PROD from './keys.prod'

export default isProduction ? PROD : DEV
