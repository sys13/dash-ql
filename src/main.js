import rp from 'request-promise'
import existingDash from '../existing_dash.json'
import {
  controllerHostName,
  isHTTPS,
  controllerPort,
  username,
  password,
  accountName,
} from '../config.json'

const DASHBOARD_NAME = 'z_dan_1111'

const baseURL = `${
  isHTTPS ? 'https' : 'http'
}://${controllerHostName}/controller`

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

const dashObj = { ...existingDash, DASHBOARD_NAME }

const formData = {
  file: {
    value: Buffer.from(JSON.stringify(dashObj)),
    options: {
      filename: 'existing_dash.json',
    },
  },
}

rp({
  ...options,
  url: `${baseURL}/CustomDashboardImportExportServlet`,
  method: 'POST',
  headers: {
    'Content-type': 'multipart/form-data',
  },
  formData,
})
  .promise()
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
