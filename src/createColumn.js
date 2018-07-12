import labelWidget from './widgetTemplates/label'
import metricWidget from './widgetTemplates/metricValue'
import getMetricDataSeriesTemplates from './widgetTemplates/getMetricDataSeriesTemplates'

export const createLabelColumn = ({ labelTexts, x }) => {
  const labels = labelTexts.map((labelText, index) => ({
    ...labelWidget,
    text: labelText,
    width: 300,
    height: 50,
    x,
    y: index * labelWidget.height,
    textAlign: 'LEFT',
  }))
  return labels
}

export const createMetricColumn = ({ metricWidgetData, x }) => {
  const metrics = metricWidgetData.map(
    ({ applicationName, metricPath, entityName }, index) => {
      return {
        ...metricWidget,
        dataSeriesTemplates: getMetricDataSeriesTemplates({
          applicationName,
          metricPath,
          entityName,
        }),
        width: 300,
        height: 50,
        y: index * labelWidget.height,
        x,
      }
    }
  )
  return metrics
}
