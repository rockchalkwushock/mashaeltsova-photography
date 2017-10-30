import {
  CollagePhoto,
  Form,
  GalleryButton,
  Layout,
  Li,
  Main,
  P,
  Plug,
  Section,
  Ul
} from '../components'

export default () => (
  <Layout>
    <Main>
      <Section className="about">
        <P className="about">
          For many years now I have had a great passion for capturing a moment
          in time and sharing the beauty of that moment with the world. I enjoy
          taking pictures for many varying events. When I am not doing photo
          shoots you will find me preforming English tutoring, or practicing my
          other passion, surfing.
        </P>
      </Section>
      <Section className="services">
        <P className="services">
          I am willing to negotiate other requested services, however the below
          are what I primarily offer:
        </P>
        <Ul>
          <Li text="baby portraits" />
          <Li text="family portraits" />
          <Li text="self-portraits" />
          <Li text="engagements" />
          <Li text="and weddings" />
        </Ul>
      </Section>
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
