var snappy = require('../')
var moment = require('moment')

// strider - vol-fa3126e1
// gitlab - vol-2190a668
// couchdb - billing - vol-45a552ab
snappy('vol-45a552ab', function (s) {
  return (moment(s.StartTime).isBefore(moment().subtract(2, 'days')))
    && (s.Description.indexOf('Created by CreateImage') === -1)
})
