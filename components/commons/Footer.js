import Icon from './Icon'

import { styles } from '../../lib'

/**
 * FIXME
 *
 * Add links to social icons.
 */

const Footer = ({ intl }) => (
  <footer>
    <div className="container social">
      <Icon icon="facebook" size="2x" url="#" />
      <Icon icon="instagram" size="2x" url="#" />
      <Icon icon="vk" size="2x" url="#" />
      <Icon icon="twitter" size="2x" url="#" />
    </div>
    <div className="container copyright">
      <Icon icon="copyright" intl={intl} url="https://rcws-development.com" />
    </div>
    <style>{`
    footer {
      background-color: ${styles.colors.peach};
      display: grid;
      grid-column: span 7;
      grid-gap: 0.5em;
      grid-template-columns: 1fr;
      padding: 0.5em 0.75em;
    }
    .container {
      text-align: center;
    }
    @media (min-width: 768px) {
      footer {
        grid-template-columns: repeat(2, 1fr);
      }
      .copyright,
      .social {
        align-self: center;
      }
      .social {
        justify-self: start;
      }
      .copyright {
        justify-self: end;
      }
    }
  `}</style>
  </footer>
)

export default Footer
