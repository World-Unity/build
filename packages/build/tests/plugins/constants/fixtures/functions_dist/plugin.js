module.exports = {
  name: 'netlify-plugin-test',
  init({ constants: { FUNCTIONS_DIST } }) {
    console.log(FUNCTIONS_DIST)
  },
}