const CustomForm = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit}>
    {children}
    <style jsx>{`
      form {
        display: grid;
        grid-row-gap: 0.5em;
        grid-template-columns: repeat(6, 1fr);
        padding: 1em;
      }
    `}</style>
  </form>
)

export default CustomForm
