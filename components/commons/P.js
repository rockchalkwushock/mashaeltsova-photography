import PropTypes from 'prop-types'

const P = ({ children, className }) => (
  <p className={className}>
    {children}
    <style jsx>{`
      p {
        margin: 0;
        padding: 0;
      }
      .services {
        flex: 1 1 auto;
      }
    `}</style>
  </p>
)

P.propTypes = {
  className: PropTypes.string
}

export default P
