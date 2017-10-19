import Link from 'next/link'

const CustomLink = ({ prefetch, text, url }) => (
  <Link prefetch={prefetch} href={url}>
    <a className="customLink">{text}</a>
  </Link>
)

export default CustomLink
