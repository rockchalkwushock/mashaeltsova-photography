# mashaeltsova-photography :camera:

[![Next](https://img.shields.io/badge/built%20with-next.js-orange.svg?style=flat-square)](https://github.com/zeit/next.js)
[![Now](https://img.shields.io/badge/deployed%20with-now--cli-orange.svg?style=flat-square)](https://github.com/zeit/now-cli)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/rockchalkwushock/mashaeltsova-photography/pulls)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Equimper](https://img.shields.io/badge/code%20style-equimper-blue.svg?style=flat-square)](https://github.com/EQuimper/eslint-config-equimper)
[![nps](https://img.shields.io/badge/scripts%20run%20with-nps-blue.svg?style=flat-square)](https://github.com/kentcdodds/nps)

[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/RockChalkDev)

## About

This has been a _work-in-progress_ for almost a year...no no I don't mean this repository, God that would be embarrassing! I told Masha I  would make her a website and over the last year the idea, the design, the what I wanted to do changed time and time again. Not until I put a hard deadline on the project and said this is what I will use and this is how I will do it _"problems be damned!"_ did this project come to life.

The real basis for me tackling this project came from a link sent to me for a photography website that a gentleman had promised to make her many years prior to us knowing each other. No lie at all I will never be able to make a website as visually stunning as this gentleman did, it's just not my skill set; however 9.5 minutes to load on a slow 3G connection with no caching: that I can do better on. So no, this website might not be the sleek and sexy beast that he offered, but in my mind if I can get a customer to your content in mere seconds then lack of sexiness should be less of a factor in converting the user to a customer.

So I approached this project from the standpoint of always looking and testing from a throttled environment in Chrome, usually opting for slow 3G. Having never been to Russia I have no idea what the end user's available connection speeds are nor how available that connection is so the goals were:

> 1. Make it fast.
> 2. Make it cache.

## Important Questions during Design & Development

When designing this site a few important questions needed to be answered:

> 1. How to deliver the high-resolution images effectively and efficiently to the end user who in 2017 will likely be viewing the product from a mobile device?

> 2. How to minimize the number of requests and/or size of data being communicated to that device and across the end user's network?

> 3. How to implement i18n since product's target audience are non-native English speakers?

> 4. Responsive images...**FML** :hankey:

It turns out I would be able to answer 3 of those questions with one answer and that solution was using the Cloudinary API. With Cloudinary I could store the original hi-res photos in the cloud and through combinations of flags/parameters create a dynamic url that would achieve 2 major things for me:

1. The image would be responsive,
2. The image would retain quality, but not be 10MB for a single request.

I had hoped that using a CSS Sprite would be possible as this would have cut down on the number of requests dramatically for the `/gallery` views; however I would not be able to deliver the best quality images in that case. Seeing as how this is a photography website I need to deliver the best quality as often as possible. Cloudinary does off the ability to create sprites and had my situation been different this would have been the route I would have taken.

Thankfully I did not have to learn Russian for this project to come together...mine is still quite meager! Also and very thankfully, there was an example of how to setup `react-intl` and `next` all while utilizing the server-side rendering feature of `next`. Should the end user's browser have a default language of Russian the server will render views in that language.

## Stack

- [Next.js]()
- [React.js]()
- [React-Intl]()
- [React-LazyLoad]()
- [Cloudinary]()


## Benchmarks

> The following data was collected using the Chrome Developer Tools. The environment the data was gathered in was that of a fast 3G connection with no caching applied.

[https://mashaeltsovaphotography.com](https://mashaeltsovaphotography.com)

| Requests | Data Transferred | Time to First Paint | Load Time |
|----------|------------------|---------------------|-----------|
| 43       | 446KB            | 229ms               | 1.35s     |

[https://mashaeltsovaphotography.com/gallery](https://mashaeltsovaphotography.com/gallery)

| Requests | Data Transferred | Time to First Paint | Load Time |
|----------|------------------|---------------------|-----------|
| 59       | 537KB            | 563ms               | 1.67s     |

For context the website discussed earlier on had the following stats:

| Requests | Data Transferred | Time to First Paint | Load Time |
|----------|------------------|---------------------|-----------|
| 53       | 27.3MB           | 6.02s               | 2.6min    |

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars2.githubusercontent.com/u/19720404?v=4" width="100px;"/><br /><sub>Cody Brunner</sub>](https://rcws-development.com/)<br />[💻](https://github.com/rockchalkwushock/mashaeltsova-photography/commits?author=rockchalkwushock "Code") [🎨](#design-rockchalkwushock "Design") [📖](https://github.com/rockchalkwushock/mashaeltsova-photography/commits?author=rockchalkwushock "Documentation") [🤔](#ideas-rockchalkwushock "Ideas, Planning, & Feedback") [🚇](#infra-rockchalkwushock "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/rockchalkwushock/mashaeltsova-photography/commits?author=rockchalkwushock "Tests") [🔧](#tool-rockchalkwushock "Tools") [🌍](#translation-rockchalkwushock "Translation") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
