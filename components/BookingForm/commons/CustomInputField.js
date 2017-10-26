import { styles } from '../../../lib'

/**
 * NOTE:
 *
 * Cannot pass children to <input />, no bueno React gets pissed off.
 * NOTE: 'placeholders'
 * @see https://css-tricks.com/almanac/selectors/p/placeholder/
 *
 * REVIEW
 * FIXME
 *
 * Currently :-webkit-autofill is only supported in Chrome & Safari
 * however most 'user agent stylesheets' have this set as !important
 * and it cannot be overridden...this makes my form look ghetto af!
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/:-webkit-autofill
 *
 */

const CustomInputField = props => (
  <div className="field">
    <input {...props} />
    <label htmlFor={props.label}>{props.label}</label>
    <style jsx>{`
      .field {
        grid-column: span 6;
        height: 60px;
        line-height: 44px;
        position: relative;
        text-align: left;
      }
      label {
        position: absolute;
        text-align: left;
        top: -12px;
        transition: 0.2s all;
        width: 100%;
      }
      input {
        background-color: transparent;
        background-repeat: no-repeat;
        border: 0;
        border-bottom: 2px solid ${styles.colors.warm};
        color: ${styles.colors.warm};
        font-size: 1em;
        outline: 0;
        padding: 0em 0.5em;
        position: absolute;
        width: 100%;
        z-index: 1;
      }
      input:focus ~ label {
        top: -35px;
      }
    `}</style>
  </div>
)

export default CustomInputField
