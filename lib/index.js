import { initGA, logEvent, logException, logPageView } from './analytics'
import { fetchData, sendDataToMicroService } from './api'
import styles from './styles'
import { createUrl } from './utils'

export {
  createUrl,
  fetchData,
  initGA,
  logEvent,
  logException,
  logPageView,
  sendDataToMicroService,
  styles
}
