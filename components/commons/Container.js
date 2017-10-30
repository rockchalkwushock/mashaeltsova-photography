import { styles } from '../../lib'

const Container = ({ children, className }) => (
  <div className={className}>
    {children}
    <style jsx>{`
      div {
        flex: 1 1 auto;
      }
      .copyright {
        font-family: ${styles.fonts.courgette};
      }
      @media (min-width: 768px) {
        .copyright {
          text-align: right;
        }
        .social {
          text-align: left;
        }
      }
    `}</style>
  </div>
)

export default Container
