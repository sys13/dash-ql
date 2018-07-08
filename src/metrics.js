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
  url: `${baseURL}/rest/applications/athenanet-prod/metric-data?metric-path=End%20User%20Experience%7CApp%7CRequests%20per%20Minute&time-range-type=BETWEEN_TIMES&start-time=1522820961522&end-time=1522847989633&output=JSON`,
})
  // get the list of applications
  .promise()
  .then(data => {
    const apps = JSON.parse(data)[0].metricValues
    console.log(apps)
  })
