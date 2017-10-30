/* eslint-disable no-console */
import ReactGA from 'react-ga'

const isProd = process.env.NODE_ENV === 'production'

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

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
