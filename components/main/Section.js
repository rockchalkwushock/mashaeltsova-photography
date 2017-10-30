import PropTypes from 'prop-types'

import { styles } from '../../lib'

const Section = ({ children, className }) => (
  <section className={className}>
    {children}
    <style jsx>{`
      .about {
        background-color: ${styles.colors.lemon};
        box-shadow: 0 0 20px rgba(54, 69, 79, 0.7);
        color: ${styles.colors.charcoal};
        grid-area: about;
        grid-column: 1 / 5;
        padding: 0.75em;
        text-align: left;
      }
      .services {
        background-color: ${styles.colors.lemon};
        box-shadow: 0 0 20px rgba(54, 69, 79, 0.7);
        color: ${styles.colors.charcoal};
        display: flex;
        flex-direction: column;
        grid-area: services;
        grid-column: 1 / 5;
        padding: 0.75em;
        text-align: left;
      }
      .gallery {
        background-color: ${styles.colors.peach};
        box-shadow: 0 0 20px rgba(54, 69, 79, 0.7);
        display: flex;
        grid-area: gallery;
        grid-column: 1 / 5;
        height: 250px;
        justify-content: center;
      }
      .booking {
        box-shadow: 0 0 20px rgba(54, 69, 79, 0.7);
        grid-area: booking;
        grid-column: 1 / 5;
      }
      @media (min-width: 540px) {
        .gallery {
          height: 360px;
        }
      }
      @media (min-width: 768px) {
        .about {
          grid-column: 1 / 3;
          grid-row: 6 / 8;
        }
        .services {
          grid-column: 3 / 5;
          grid-row: 6 / 8;
        }
        .gallery {
          grid-column: 1 / 5;
          grid-row: 1 / 6;
        }
        .booking {
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-column: 1 / 5;
          grid-row: 8 / 12;
        }
      }
      @media (min-width: 1024px) {
        .gallery {
          height: 425px;
        }
      }
    `}</style>
  </section>
)

Section.propTypes = {
  className: PropTypes.string.isRequired
}

export default Section
