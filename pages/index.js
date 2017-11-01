import PropTypes from 'prop-types'

import {
  A,
  CollagePhoto,
  Layout,
  Li,
  P,
  Plug,
  Section,
  Ul
} from '../components'
import { BookingForm } from '../containers'
import { withIntl } from '../lib'

export const Index = ({ messages, url }) => {
  const [message, services] = messages.sectionServices.split(': ')
  const list = services.split(',').map(s => <Li key={s} text={s} />)
  return (
    <Layout url={url}>
      <Section className="about">
        <P className="about">{messages.sectionAbout}</P>
      </Section>
      <Section className="services">
        <P className="services">{message}:</P>
        <Ul>{list}</Ul>
      </Section>
      <Section className="gallery">
        <CollagePhoto />
        <A
          className="linkToGallery"
          navigate
          text={messages.buttonGallery}
          url="/gallery"
        />
      </Section>
      <Section className="booking">
        <Plug messages={messages} />
        <BookingForm messages={messages} />
      </Section>
    </Layout>
  )
}

Index.propTypes = {
  intl: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
  url: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
}

export default withIntl(Index)
