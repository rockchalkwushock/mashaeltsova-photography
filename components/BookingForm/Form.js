const Form = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit}>
    {children}
    <style jsx>{`
      form {
        display: grid;
        grid-row-gap: 0.5em;
        grid-template-columns: repeat(6, 1fr);
        justify-items: center;
        padding: 1em;
      }
    `}</style>
  </form>
)

export default Form