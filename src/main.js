import rp from 'request-promise'
import {
  controllerHostName,
  isHTTPS,
  controllerPort,
  username,
  password,
  accountName,
} from '../config.json'

const baseURL = `${isHTTPS ? 'https' : 'http'}://${controllerHostName}/controller`

// Build base options for each rest call
const options = {
  url: `${baseURL}`,
  port: controllerPort,
  auth: {
    user: `${username}@${accountName}`,
    pass: password,
    sendImmediately: true,
  },
}
rp({
  ...options,
  url: `${baseURL}/rest/applications/3843/tiers/JVM_SCHEDULER/nodes?output=JSON`,
})
  // get the list of applications
  .promise()
  .then(data => {
    const nodes = JSON.parse(data)
      .filter(({ name }) => name !== 'LRPTRSMSCH01_T00sc')
      .map(({ id }) => id)
      .slice(0, 24)
      .join(',')
    console.log(nodes)
    console.log(`${baseURL}/rest/mark-nodes-historical?application-component-node-ids=${nodes}`)

    rp({
      ...options,
      url: `${baseURL}/rest/mark-nodes-historical?application-component-node-ids=${nodes}`,
      method: 'POST',
    })
    // console.log(apps)
  })
