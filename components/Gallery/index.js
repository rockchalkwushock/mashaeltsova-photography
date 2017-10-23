import PropTypes from 'prop-types'

import { Container, CustomLink, Header, Nav, Photo } from '../commons'

const Gallery = ({ ids, pathname }) => (
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
    <Container className="gallery">
      {/* <Photo publicId='girl_in_red_dress' />*/}
      {ids.map(id => <Photo key={id} publicId={id} />)}
    </Container>
  </Container>
)

Gallery.propTypes = {
  // ids: PropTypes.array.isRequired,
  // intl: PropTypes.object.isRequired,
  // messages: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired
}

export default Gallery
