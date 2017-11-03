const Nav = ({ children }) => (
  <nav>
    {children}
    <style jsx>{`
      nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        padding: 0.5em;
      }
      @media (max-width: 375px) {
        flex-direction: column;
      }
    `}</style>
  </nav>
)

export default Nav
