import React from 'react';
import { Helmet } from 'react-helmet';

// @TODO Still needs the canonical URLs, probably need to pass from pages to <Layout>
// @TODO Generate Apple Icons and MSTiles
//       Keep an eye on https://github.com/jantimon/favicons-webpack-plugin/pull/127

export default ({
  title,
  description,
  themeColor,
  twitterUsername,
  canonical,
}) => (
  <Helmet>
    <html lang="en" />

    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
    <meta
      content="width=device-width,initial-scale=1.0,user-scalable=yes"
      name="viewport"
    />

    <meta content={title} name="apple-mobile-web-app-title" />
    <meta content={title} property="og:title" />
    <meta content={title} name="twitter:title" />
    <title>{title}</title>

    <meta content={description} name="description" />
    <meta content={description} property="og:description" />
    <meta content={description} name="twitter:description" />

    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta
      content="black-translucent"
      name="apple-mobile-web-app-status-bar-style"
    />
    <meta content={themeColor} name="theme-color" />
    <meta content={title} name="application-name" />

    <meta content={title} property="og:site_name" />
    <meta content="summary_large_image" name="twitter:card" />
    <meta content={`@${twitterUsername}`} name="twitter:site" />
    <meta content={`@${twitterUsername}`} name="twitter:creator" />
    <meta content={title} name="twitter:text:title" />
    <meta content={canonical} property="og:url" />
    <meta content={canonical} name="twitter:url" />

    <meta content={canonical} property="og:image" />
    <meta content="1024" property="og:image:width" />
    <meta content="512" property="og:image:height" />
    <meta content={canonical} name="twitter:image" />
    <meta content="1024" name="twitter:image:width" />
    <meta content="512" name="twitter:image:height" />
    <meta content={canonical} property="og:image" />
    <meta content="800" property="og:image:width" />
    <meta content="1200" property="og:image:height" />

    <meta content={themeColor} name="msapplication-TileColor" />
    <meta content="/mstile-70x70.png" name="msapplication-square70x70" />
    <meta content="/mstile-144x144.png" name="msapplication-square144x144" />
    <meta content="/mstile-150x150.png" name="msapplication-square150x150" />
    <meta content="/mstile-310x150.png" name="msapplication-wide310x150" />
    <meta content="/mstile-310x310.png" name="msapplication-square310x310" />

    <link href="/manifest.webmanifest" rel="manifest" />

    <link href="/apple-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
    <link href="/apple-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
    <link href="/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
    <link href="/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
    <link
      href="/apple-icon-114x114.png"
      rel="apple-touch-icon"
      sizes="114x114"
    />
    <link
      href="/apple-icon-120x120.png"
      rel="apple-touch-icon"
      sizes="120x120"
    />
    <link
      href="/apple-icon-144x144.png"
      rel="apple-touch-icon"
      sizes="144x144"
    />
    <link
      href="/apple-icon-152x152.png"
      rel="apple-touch-icon"
      sizes="152x152"
    />
    <link
      href="/apple-icon-180x180.png"
      rel="apple-touch-icon"
      sizes="180x180"
    />
    <link
      href="/android-icon-192x192.png"
      rel="icon"
      sizes="192x192"
      type="image/png"
    />

    <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
    <link href="/favicon-96x96.png" rel="icon" sizes="96x96" type="image/png" />
    <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
  </Helmet>
);
