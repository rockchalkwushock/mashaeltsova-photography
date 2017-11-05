const Wrapper = ({ children }) => (
  <div className="wrapper">
    {children}
    <style jsx>{`
      .wrapper {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        min-height: 100vh;
        text-align: center;
      }
    `}</style>
  </div>
)

export default Wrapper
