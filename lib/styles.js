import css from 'styled-jsx/css'

export default {
  colors: {
    charcoal: '#36454F', // rgba(54, 69, 79, 1)
    lemon: '#DCB239', // rgba(220, 178, 57, 1)
    peach: '#FEDCD2', // rgba(254, 220, 210, 1)
    powder: '#BFD8D2', // rgba(191, 216, 210, 1)
    warm: '#DF744A', // rgba(223, 116, 74, 1)
    white: '#FFFFFF' // rgba(255, 255, 255, 1)
  },
  fonts: {
    courgette: '"Courgette", "Veranda", cursive',
    nunito: '"Nunito", "Veranda", sans-serif'
  }
}

export const fadeIn = css`
  .fadeIn {
    animation-name: fade-in;
    animation-duration: 1.5s; /* I can always set this and other properties in the component. */
    animation-timing-function: ease-in;
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0.25;
    }
    40% {
      opacity: 0.45;
    }
    60% {
      opacity: 0.65;
    }
    80% {
      opacity: 0.85;
    }
    100% {
      opacity: 1;
    }
  }
`
