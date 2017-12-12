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
      <div>
        <a href={url}>
          <span>Designed by Cody Brunner</span>
        </a>
        <span>
          All images <FontAwesome name={icon} size={size} /> {yearToDisplay}{' '}
          Masha Eltsova Photography
        </span>
        <style jsx>{`
          div {
            display: flex;
            flex-direction: column;
          }
          @media (max-width: 321px) {
            div {
              font-size: 0.85em;
            }
            span {
              font-size: 0.85em;
            }
          }
        `}</style>
      </div>
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
