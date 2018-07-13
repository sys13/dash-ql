# dash-ql

Create AppD dashboards at lightning speed with a query language

## How to Use

1. Add your controller details to `config.json`
1. Download [nvm](https://github.com/creationix/nvm). Once nvm is installed, run `nvm install v8`
1. From the project directory, install dependencies with `npm install`
1. Run `npm start`

## Development

### Features
- [x] shortforms: (art = Average Response Time (ms), etc.)
- [x] headers
- [x] default metric format strings
- [x] AS
- [] add a title
- [] more than just bts
- [] WHERE on a name/label
- [] WHERE operators (>, <, REGEX, etc.)
- [] WHERE on metric values (current art > x)
- [] SORT BY
- [] LIMIT
- [] query autocomplete
- [] query validation
- [] HR status lights
- [] specify dashboard name
- [] create multiple dashboards at once
- [] save queries
- [] more metric types: browser, mobile, DB, SIM
- [] styling/theming
- [] add logo
- [] table grid lines
- [] electron app
- [] preview dashboard before deploying
- [] share dashboard formulas

### Helpful Links

API
- [Application Model API](https://docs.appdynamics.com/display/PRO44/Application+Model+API)
- [Metric and Snapshot API](https://docs.appdynamics.com/display/PRO44/Metric+and+Snapshot+API)

Libraries
- [request](https://github.com/request/request)
- [request-promise](https://github.com/request/request-promise)
- [bluebird](http://bluebirdjs.com/docs/api-reference.html)


