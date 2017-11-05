import FontAwesome from 'react-fontawesome'

const Placeholder = () => (
  <div className="placeholder">
    <FontAwesome name="spinner" size="4x" pulse />
    <style jsx>{`
      div.placeholder {
        align-items: center;
        display: flex;
        height: 300px;
        justify-content: center;
        width: 300px;
      }
    `}</style>
  </div>
)

export default Placeholder
