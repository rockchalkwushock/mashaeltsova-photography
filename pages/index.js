import {
  CollagePhoto,
  GalleryButton,
  Layout,
  Main,
  Section
} from '../components'

export default () => (
  <Layout>
    <Main>
      <Section className="about" />
      <Section className="services" />
      <Section className="gallery">
        <CollagePhoto />
        <GalleryButton />
      </Section>
      <Section className="booking" />
    </Main>
  </Layout>
)
