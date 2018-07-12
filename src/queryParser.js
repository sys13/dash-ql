const fromStructure = ['applications', 'apps']

const getSelects = ({ query }) => {
  const selectRegex = /select(.*)from/i
  const allSelect = selectRegex.exec(query)
  const selects = allSelect[1].split(',').map(s => s.trim())
  return selects
}

const getFrom = ({ query }) => {
  const fromRegex = /from(.*)where/i
  const from = fromRegex.exec(query)[1].trim()
  const isValid = fromStructure.includes(from)
  return { from, isValid }
}

const getWhere = ({ query }) => {
  const whereRegex = /where(.*)/i
  const allWhere = whereRegex.exec(query)
  const wheres = allWhere[1].split(',').map(s => s.trim())
  const tokenizedWheres = wheres.map(where => {
    const delimeterRegex = /(.*?) ?(=) ?\"(.*)\"/
    const [, field, operator, value] = delimeterRegex.exec(where)
    return { field, operator, value }
  })
  return tokenizedWheres
}

export default ({ query }) => {
  const selects = getSelects({ query })
  const { from } = getFrom({ query })
  const wheres = getWhere({ query })
  console.log(selects, from, wheres)
  return { selects, from, wheres }
}
