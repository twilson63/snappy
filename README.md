# Snappy

Snappy is a tool that takes the following params and creates a ebs snapshot then removes all ebs snapshots that meet the filter function params criteria.  (aka older than 48 hours)

## Params

* volumes
* filter function

## Usage (as a library)

```
npm i @twilson63/snappy --save
```

```
var snappy = require('snappy')

snappy(['vol1', 'vol2'], function (s) {
  return greaterThan48hoursOld(s)
})
```

## AMAZON Configuration

There are several ways to setup your aws configuration, one way is by ENVIRONMENT VARIABLES:

AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY

## Support 

Post an Issue - https://github.com/twilson63/snappy/issues

## License

MIT