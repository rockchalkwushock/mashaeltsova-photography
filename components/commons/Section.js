export default ({ children }) => (
  <section>
    {children}
    <style jsx>{`
      section {
        background-color: #123456;
        height: 100vh;
        max-width: 100vw;
      }
    `}</style>
  </section>
)
