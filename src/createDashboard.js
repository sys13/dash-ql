import { options, baseURL } from './requestOptions'
import rp from 'request-promise'

export default ({ dashObj }) => {
  if (dashObj === undefined || dashObj === null) {
    console.console.error('no dashboard obj')
    return
  }

  const formData = {
    file: {
      value: Buffer.from(JSON.stringify(dashObj)),
      options: {
        filename: 'name_does_not_matter.json',
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
