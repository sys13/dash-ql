import { options, baseURL } from './requestOptions'
import rp from 'request-promise'

export const getApps = async () => {
  return await rp({
    ...options,
    url: `${baseURL}/rest/applications?output=json`,
  })
    .promise()
    .then(data => {
      const parsedData = JSON.parse(data)
      console.log(parsedData)
      return parsedData
    })
    .catch(err => {
      console.log(err)
    })
}

export const getTiers = async ({ applicationName }) => {
  return await rp({
    ...options,
    url: `${baseURL}/rest/applications/${applicationName}/tiers?output=json`,
  })
    .promise()
    .then(data => {
      const parsedData = JSON.parse(data)
      console.log(parsedData)
      return parsedData
    })
    .catch(err => {
      console.log(err)
    })
}

export const getBTs = async ({ applicationName }) => {
  return await rp({
    ...options,
    url: `${baseURL}/rest/applications/${applicationName}/business-transactions?output=json`,
  })
    .promise()
    .then(data => {
      const parsedData = JSON.parse(data)
      console.log(parsedData)
      return parsedData
    })
    .catch(err => {
      console.log(err)
    })
}
