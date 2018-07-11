import createDashboard from './createDashboard'
import createBTDashboard from './createBTDashboard'
import { getBTs } from './getAppModel'

const main = async () => {
  const DASHBOARD_NAME = 'z_dan_2'
  const applicationName = '2075ICE.PREPROD'
  const bts = await getBTs({ applicationName })

  const nameListDash = createBTDashboard({
    bts,
    applicationName,
  })
  debugger
  // console.log(nameListDash)

  createDashboard({ dashObj: { ...nameListDash, name: DASHBOARD_NAME } })
}

main()
