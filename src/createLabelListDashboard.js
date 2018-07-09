import base from './widgetTemplates/base'
import labelWidget from './widgetTemplates/label'

export default ({ list }) => {
  const labels = list.map((text, index) => ({
    ...labelWidget,
    text,
    y: index * labelWidget.height,
  }))
  return { ...base, widgetTemplates: labels }
}
