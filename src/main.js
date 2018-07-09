import createDashboard from './createDashboard'
import createLabelListDashboard from './createLabelListDashboard'
import getBTNames from './getBTNames'

const main = async () => {
  const DASHBOARD_NAME = 'z_dan_2'
  const btNames = await getBTNames()
  const nameListDash = createLabelListDashboard({ list: btNames })

  createDashboard({ dashObj: { ...nameListDash, name: DASHBOARD_NAME } })
}

main()
