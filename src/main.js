import createDashboard from './createDashboard'
import createBTDashboard from './createBTDashboard'
import { getBTs } from './getAppModel'
import queryParser from './queryParser'

const main = async () => {
  const DASHBOARD_NAME = 'z_dan_2'
  const applicationName = '2075ICE.PREPROD'

  const QUERY =
    'SELECT backends, art FROM applications WHERE application = "2075ICE.PREPROD"'
  // const bts = await getBTs({ applicationName })

  const parsedQuery = queryParser({ query: QUERY })
  console.log(parsedQuery)

  // const nameListDash = createBTDashboard({
  //   bts,
  //   applicationName,
  // })
  // debugger
  // // console.log(nameListDash)

  // createDashboard({ dashObj: { ...nameListDash, name: DASHBOARD_NAME } })
}

main()
