import { styles } from '../../lib'

const Section = props => (
  <section
    className={
      ('header' in props && 'header') ||
      ('navigation' in props && 'navigation') ||
      ('about' in props && 'about') ||
      ('services' in props && 'services') ||
      ('gallery' in props && 'gallery') ||
      ('booking' in props && 'booking') ||
      ('footer' in props && 'footer')
    }
  >
    {props.children}
    <style jsx>{`
      section {
        background-color: ${styles.colors.powder};
      }
      .header,
      .about,
      .services,
      .gallery,
      .booking {
        grid-column: span 7;
      }
      .header {
        height: 500px;
      }
      .about,
      .gallery {
        height: 250px;
      }
      .services {
        height: 150px;
      }
      .booking {
        height: 300px;
      }
      @media (min-width: 768px) {
        .about {
          grid-column: span 4;
        }
        .services {
          grid-column: span 3;
          height: 250px;
        }
        .gallery,
        .booking {
          height: 500px;
        }
      }
      @media (min-width: 1025px) {
        .about {
          grid-column: span 7;
        }
        .services {
          grid-column: 5 / 8;
          height: 500px;
        }
        .gallery {
          grid-column: span 7;
          grid-row: 4 / 5;
        }
        .booking {
          grid-column: 1 / 5;
          grid-row: 5 / 6;
        }
      }
    `}</style>
  </section>
)

export default Section
