import FontAwesome from 'react-fontawesome'

import { messages, styles } from '../../lib'

/**
 * FIXME
 *
 * Add transformations on hover.
 */

// Get current year from browser.
const year = new Date().getFullYear()

const Icon = ({ icon, intl, size, url }) => {
  if (icon === 'copyright') {
    return (
      <a className="copyright" href={url}>
        <span>
          <FontAwesome name={icon} size="lg" />{' '}
          {`${year} ${intl.formatMessage(messages.rcws)}`}
        </span>
        <style jsx>{`
      .copyright {
        color: ${styles.colors.warm}
        padding: 0.25em;
      }
      .copyright:visited {
        color: ${styles.colors.warm}
      }
      .copyright:hover {
        color: ${styles.colors.charcoal}
      }
    `}</style>
      </a>
    )
  }
  return (
    <a className="social-link" href={url}>
      <FontAwesome name={icon} size={size} />
      <style jsx>{`
      .social-link {
        color: ${styles.colors.warm}
        padding: 0.25em;
      }
      .social-link:visited {
        color: ${styles.colors.warm}
      }
      .social-link:hover {
        color: ${styles.colors.powder}
      }
      @media (min-width: 768px) {
        .social-link {
        padding: 0.25em 0.5em;
      }
      }
    `}</style>
    </a>
  )
}

export default Icon
