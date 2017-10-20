import Link from 'next/link'

/**
 * NOTE
 *
 * `prefetch` will grab all the JS from the file
 * the route is pointing to in advance. This will
 * make the route change look "almost" instantaneous.
 */

import { styles } from '../../lib'

const CustomLink = ({ prefetch, text, url }) => (
  <li>
    <Link prefetch={prefetch} href={url}>
      <a className="customLink">{text}</a>
    </Link>
    <style jsx>{`
      .customLink {
        color: ${styles.colors.peach};
        font-size: 1.2em;
        padding-bottom: 0.5em;
      }
      .customLink:hover {
        font-size: 1.5em;
      }
    `}</style>
  </li>
)

export default CustomLink
