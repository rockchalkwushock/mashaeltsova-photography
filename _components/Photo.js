import LazyLoad from 'react-lazyload'

import { createUrl } from '../lib'

const Photo = ({ id }) => (
  <LazyLoad height={200} once>
    <picture>
      <source media="(min-width: 1024px)" srcSet={createUrl(false, id, 320)} />
      <source media="(min-width: 768px)" srcSet={createUrl(false, id, 360)} />
      <source
        media="(min-width: 600px) and (orientation: landscape)"
        srcSet={createUrl(false, id, 275)}
      />
      <source media="(min-width: 540px)" srcSet={createUrl(false, id, 475)} />
      <source media="(min-width: 425px)" srcSet={createUrl(false, id, 375)} />
      <img src={createUrl(false, id, 300)} />
      <style jsx>{`
        img {
          -webkit-box-shadow: 6px 6px 6px rgba(54, 69, 79, 0.7);
          box-shadow: 6px 6px 6px rgba(54, 69, 79, 0.7);
          border-radius: 15px;
        }
      `}</style>
    </picture>
  </LazyLoad>
)

export default Photo
