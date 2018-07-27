const chromeLauncher = require('chrome-launcher');
const { test } = require('ava');
const lighthouse = require('lighthouse');
const { siteUrl } = require('../site-config');

const launchChromeAndRunLighthouse = (
  url,
  opts = { chromeFlags: ['--headless'] },
  config = null
) =>
  chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then(chrome => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then(results =>
      chrome.kill().then(() => results.lhr)
    );
  });

let scores;
test.before(async t => {
  console.log(`Auditing ${siteUrl}.\n`);
  scores = await launchChromeAndRunLighthouse(siteUrl).then(
    ({ categories }) => categories
  );
});

const logScore = score => `Is ${score * 100}.`;

test('Performance Score above 90', t => {
  const score = scores['performance'].score;
  t.log(logScore(score));
  score >= 0.9 ? t.pass() : t.fail();
});

test('PWA Score above 90', t => {
  const score = scores['pwa'].score;
  t.log(logScore(score));
  score >= 0.9 ? t.pass() : t.fail();
});

test('Accessibility Score above 90', t => {
  const score = scores['accessibility'].score;
  t.log(logScore(score));
  score >= 0.9 ? t.pass() : t.fail();
});

test('Best Practices Score above 90', t => {
  const score = scores['best-practices'].score;
  t.log(logScore(score));
  score >= 0.9 ? t.pass() : t.fail();
});

test('SEO Score above 90', t => {
  const score = scores['seo'].score;
  t.log(logScore(score));
  score >= 0.9 ? t.pass() : t.fail();
});
