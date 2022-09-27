module.exports = {
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  '**/*.(ts|tsx|js)': (filenames) => [
    `npx prettier --write ${filenames.join(' ')}`,
    `npx eslint ${filenames.join(' ')}`,
  ],

  '**/*.(md|json)': (filenames) =>
    `npx prettier --write ${filenames.join(' ')}`,
};
