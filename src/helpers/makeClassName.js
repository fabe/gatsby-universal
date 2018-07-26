// This helper function can be used to create random class
// names. It's used for generating no-js class names for
// the transitions.
export default (prefix = '') => {
  let name = '';
  const possible = 'ABCEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz';

  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));

  return prefix + name;
};
