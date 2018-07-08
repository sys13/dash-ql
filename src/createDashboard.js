import { options, baseURL } from './requestOptions'
import rp from 'request-promise'

export default ({ dashObj }) => {
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
}
