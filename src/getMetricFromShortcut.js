const SHORTCUTS = [
  { metric: 'Tier', shortcut: 'tier' },
  { metric: 'Business Transaction', shortcut: 'bt' },
  { metric: 'Average Response Time (ms)', shortcut: 'art' },
  { metric: 'Calls per Minute', shortcut: 'cpm' },
  { metric: 'Errors per Minute', shortcut: 'epm' },
]

export default sc => SHORTCUTS.find(({ shortcut }) => shortcut === sc).metric
