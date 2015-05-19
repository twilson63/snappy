var AWS = require('aws-sdk')
var ec2 = new AWS.EC2({ region: 'us-east-1'})
var R = require('ramda')

var Promise = require('bluebird')
var ec2 = Promise.promisifyAll(ec2)

module.exports = function (volume, filter) {
  try {
     return R.pipeP(
       ec2.createSnapshotAsync.bind(ec2),
       setCriteria,
       ec2.describeSnapshotsAsync.bind(ec2),
       R.path(['Snapshots']),
       R.filter(filter || all),
       R.map(function (s) { return { SnapshotId: s.SnapshotId }}),
       R.map(ec2.deleteSnapshotAsync.bind(ec2))
     )({ VolumeId: volume })
   } catch (e) {
     console.log(e)
   }
}


function setCriteria (results) { 
  return { 
    Filters: [
      { Name: 'volume-id', Values: [results.VolumeId]},
      { Name: 'status', Values:['completed']}
    ]
  }
}

function all (o) { return true }

