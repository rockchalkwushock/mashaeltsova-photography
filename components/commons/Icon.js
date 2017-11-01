import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

// Get current year from browser.
const year = new Date().getFullYear()
// Slick thinking!
const yearToDisplay = year === 2017 ? year : `2017 - ${year}`

// NOTE: She wants this left in English!
const Icon = ({ icon, size, url }) => {
  if (icon === 'copyright') {
    return (
      <a href={url}>
        <span>{`Designed by RCWS Development ${yearToDisplay}`}</span>
        <style jsx>{`
          @media (max-width: 321px) {
            span {
              font-size: 0.95em;
            }
          }
        `}</style>
      </a>
    )
  }
  return (
    <a href={url}>
      <FontAwesome name={icon} size={size} />
    </a>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Icon
