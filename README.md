# gatsby-universal

A ~~simple~~ and *opinionated* setup for using Gatsby with Redux, styled-components, page transitions, IntersectionObserver.

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
