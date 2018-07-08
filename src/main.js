import existingDash from '../existing_dash.json'
import createDashboard from './createDashboard'

const DASHBOARD_NAME = 'z_dan_1111'
const dashObj = { ...existingDash, DASHBOARD_NAME }

createDashboard({ dashObj })
