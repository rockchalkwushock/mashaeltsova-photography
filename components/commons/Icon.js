import FontAwesome from 'react-fontawesome'

// Get current year from browser.
const year = new Date().getFullYear()

const Icon = ({ icon, size, url }) => {
  if (icon === 'copyright') {
    return (
      <a href={url}>
        <span>
          <FontAwesome name={icon} size={size} /> {`${year} RCWS Development`}
        </span>
      </a>
    )
  }
  return (
    <a href={url}>
      <FontAwesome name={icon} size={size} />
    </a>
  )
}

export default Icon
