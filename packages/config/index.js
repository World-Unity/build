const { dirname } = require('path')

const configorama = require('configorama')

const { getConfigPath } = require('./path')
const { validateConfig } = require('./validate')
const { normalizeConfig } = require('./normalize')
const { handleFiles } = require('./files')

const resolveConfig = async function(configFile, { cwd, context } = {}) {
  const configPath = await getConfigPath(configFile, cwd)
  const baseDir = dirname(configPath)

  const config = await configorama(configPath, {
    options: { context },
    variableSources: [
      {
        /* Match variables ${secrets:xyz} */
        match: /^secrets:/,
        async resolver() {
          // Call to remote secret store
          return 'shhhhhhh'
        },
      },
      {
        /* Match variables ${context:xyz} */
        match: /^context:/,
        async resolver(varToProcess, { context = 'production' }) {
          const objectPath = varToProcess.replace('context:', '')
          return `\${self:context.${context}.${objectPath}}`
        },
      },
    ],
  })

  validateConfig(config)

  const configA = normalizeConfig(config)
  const configB = await handleFiles(configA, baseDir)
  return configB
}

module.exports = resolveConfig
/* Formatting utilities */
module.exports.formatUtils = configorama.format
/* Resolve Netlify config path */
module.exports.getConfigPath = getConfigPath
