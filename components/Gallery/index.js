import PropTypes from 'prop-types'

import { Container, CustomLink, Header, Nav } from '../commons'

const Gallery = ({ ids }) => (
  <Container className="galleryPage">
    <Header text="Masha Eltsova Photography" />
    <Nav>
      <CustomLink className="galleryNav" text="Family" url="/gallery/family" />
      <CustomLink
        className="galleryNav"
        text="Portrait"
        url="/gallery/portrait"
      />
      <CustomLink className="galleryNav" text="Travel" url="/gallery/travel" />
      <CustomLink
        className="galleryNav"
        text="Wedding"
        url="/gallery/wedding"
      />
    </Nav>
    <Container className="gallery">hello</Container>
  </Container>
)

Gallery.propTypes = {
  ids: PropTypes.array.isRequired
  // intl: PropTypes.object.isRequired,
  // messages: PropTypes.object.isRequired,
  // url: PropTypes.shape({
  //   pathname: PropTypes.string.isRequired
  // })
}

export default Gallery
