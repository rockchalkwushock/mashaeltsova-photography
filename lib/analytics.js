/* eslint-disable no-console */
import ReactGA from 'react-ga'

import { isProd } from './utils'

export const initGA = () => {
  if (!isProd) {
    console.log('GA init')
  }
  ReactGA.initialize(process.env.GA_TRACKING_ID)
}

export const logPageView = () => {
  if (!isProd) {
    console.log(`Logging pageview for ${window.location.pathname}`)
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
