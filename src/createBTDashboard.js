import base from './widgetTemplates/base'
import labelWidget from './widgetTemplates/label'
import metricWidget from './widgetTemplates/metricValue'
import getMetricDataSeriesTemplates from './widgetTemplates/getMetricDataSeriesTemplates'

export default ({ bts, applicationName }) => {
  const labels = bts.map(({ name }, index) => ({
    ...labelWidget,
    text: name,
    width: 300,
    height: 50,
    y: index * labelWidget.height,
    textAlign: 'LEFT',
  }))
  const responseTimes = bts.map(({ internalName, tierName }, index) => {
    return {
      ...metricWidget,
      dataSeriesTemplates: getMetricDataSeriesTemplates({
        applicationName,
        metricPath: `Business Transaction Performance|Business Transactions|${tierName}|${internalName}|Calls per Minute`,
        entityName: tierName,
      }),
      height: 50,
      y: index * labelWidget.height,
      x: 300,
    }
  })
  return { ...base, widgetTemplates: [...labels, ...responseTimes] }
}
