const Form = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit}>
    {children}
    <style jsx>{`
      form {
        border: 1px solid #000000;
        display: grid;
        grid-row-gap: 1em;
        grid-template-columns: repeat(6, 1fr);
        justify-items: center;
        padding: 1em;
      }
    `}</style>
  </form>
)

export default Form
