/**
 * REVIEW
 * FIXME
 *
 * gallery has fixed heights for development
 * because there is no content to give height automatically.
 *
 */

const Section = props => (
  <section
    className={
      ('header' in props && 'header') ||
      ('about' in props && 'about') ||
      ('services' in props && 'services') ||
      ('gallery' in props && 'gallery') ||
      ('booking' in props && 'booking')
    }
  >
    {props.children}
    <style jsx>{`
      .header,
      .about,
      .services,
      .gallery,
      .booking {
        grid-column: span 7;
      }
      .gallery {
        height: 250px;
      }
      @media (min-width: 768px) {
        .about {
          grid-column: span 4;
        }
        .services {
          grid-column: span 3;
        }
        .gallery {
          height: 500px;
        }
      }
    `}</style>
  </section>
)

export default Section
