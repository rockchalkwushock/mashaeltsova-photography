import PropTypes from 'prop-types'

const Li = ({ text }) => (
  <li>
    {text}
    <style jsx>{`
      li {
        padding: 0.25em 0;
        text-transform: uppercase;
      }
    `}</style>
  </li>
)

Li.propTypes = {
  text: PropTypes.string.isRequired
}

export default Li
