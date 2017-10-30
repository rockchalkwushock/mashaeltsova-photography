import {
  CollagePhoto,
  Form,
  GalleryButton,
  Layout,
  Main,
  Plug,
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
      <Section className="booking">
        <Plug />
        <Form />
      </Section>
    </Main>
  </Layout>
)
