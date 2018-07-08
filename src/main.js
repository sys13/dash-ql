import existingDash from '../existing_dash.json'
import createDashboard from './createDashboard'
import getBTNames from './getBTNames'

const main = async () => {
  const DASHBOARD_NAME = 'z_dan_1111'
  const dashObj = { ...existingDash, DASHBOARD_NAME }

  const btNames = await getBTNames()
  console.log(btNames)

  // createDashboard({ dashObj })
}

main()
