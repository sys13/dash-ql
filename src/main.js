import _ from 'lodash'
import queryParser, { getApplicationFromWheres } from './queryParser'
import { getBTs } from './getAppModel'
import getColumnFromSelect from './getColumnFromSelect'
import base from './widgetTemplates/base'
import createDashboard from './createDashboard'

const main = async () => {
  const DASHBOARD_NAME = 'z_dan_2'
  const query = 'SELECT bt, art, cpm, epm FROM applications WHERE application = "2075ICE.PREPROD"'

  const { selects, from, wheres } = queryParser({ query })

  // TODO: maybe this should be a gather data method
  // TODO: only get bt info if in select
  const applicationName = getApplicationFromWheres({ wheres })
  const bt = await getBTs({ applicationName })
  const data = { bt }

  const widgets = selects.map((s, index) => getColumnFromSelect({
    selects,
    selectIndex: index,
    data,
    wheres,
  }))
  const dashObj = {
    ...base,
    widgetTemplates: _.flatten(widgets),
    name: DASHBOARD_NAME,
    width: 1200,
  }

  createDashboard({ dashObj })
}

main()
