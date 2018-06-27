# gatsby-universal

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

A ~~simple~~ and *opinionated* setup for using Gatsby v2 with Redux, tag-agnostic styled-components, page transitions, scroll events with `IntersectionObserver`.

## Usage

```bash
# Installation
gatsby new my-site https://github.com/fabe/gatsby-universal

# To develop
yarn develop

# To build
yarn build

# To test SSR (for Lighthouse etc.)
yarn ssr

# To format JS (precommit)
yarn prettier
```

## Lighthouse scores on Netlify

![](https://i.imgur.com/jSG7hSz.png)

## Folder structure
```
├── README.md
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── package.json
├── src
│   ├── actions
│   │   └── modalActions.js
│   ├── components
│   │   ├── box
│   │   │   ├── box.css.js
│   │   │   └── box.js
│   │   ├── footer
│   │   │   ├── footer.css.js
│   │   │   └── footer.js
│   │   ├── head
│   │   │   └── head.js
│   │   ├── header
│   │   │   ├── header.css.js
│   │   │   ├── header.js
│   │   │   └── nav
│   │   ├── io
│   │   │   └── io.js
│   │   ├── layout
│   │   │   ├── layout.css.js
│   │   │   └── layout.js
│   │   ├── modal
│   │   │   ├── modal.css.js
│   │   │   └── modal.js
│   │   ├── title
│   │   │   ├── title.css.js
│   │   │   └── title.js
│   │   └── transition
│   │       └── transition.js
│   ├── constants
│   │   ├── actionTypes.js
│   │   ├── breakpoints.js
│   │   └── transition.js
│   ├── containers
│   │   └── modal
│   │       └── modal.js
│   ├── helpers
│   │   ├── agnosticStyled.js
│   │   ├── getTransitionStyle.js
│   │   ├── makeClassName.js
│   │   ├── mediaTemplates.js
│   │   └── toFallbackStyleString.js
│   ├── images
│   │   └── icon.png
│   ├── pages
│   │   ├── 404.js
│   │   ├── about.js
│   │   └── index.js
│   ├── reducers
│   │   ├── index.js
│   │   └── modal.js
│   ├── reset.css.js
│   ├── selectors
│   │   └── modalSelectors.js
│   └── store
│       └── createStore.js
└── yarn.lock
```

## Author

* Fabian Schultz ([@fschultz\_](https://twitter.com/fschultz_)) - [Stink Studios](https://stinkstudios.com)
