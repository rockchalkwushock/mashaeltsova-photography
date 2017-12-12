import { Container, Icon } from '../commons'
import { styles } from '../../lib'

const Footer = () => (
  <footer>
    <Container className="social">
      <Icon
        icon="facebook"
        size="2x"
        url="https://www.facebook.com/masha.eltsova"
      />
      <Icon
        icon="instagram"
        size="2x"
        url="https://www.instagram.com/mashaeltcovaphotography"
      />
      <Icon icon="vk" size="2x" url="https://www.vk.com/club65938200" />
      <Icon icon="twitter" size="2x" url="https://twitter.com/MASHAELTSOVA" />
    </Container>
    <Container className="copyright">
      <Icon icon="copyright" size="lg" url="https://codybrunner.rocks" />
    </Container>
    <style jsx>{`
      footer {
        background-color: ${styles.colors.peach};
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        padding: 1em;
      }
      @media (min-width: 768px) {
        footer {
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
        }
      }
    `}</style>
  </footer>
)

export default Footer
