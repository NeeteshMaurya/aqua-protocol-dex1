
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./aqua-protocol-sdk.cjs.production.min.js')
} else {
  module.exports = require('./aqua-protocol-sdk.cjs.development.js')
}
