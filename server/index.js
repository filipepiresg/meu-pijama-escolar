'use strict'

const routes = require('./src/routes')
require('./src/config/db')
const { app, PORT } = require('./src/bin/app')

app.use('/api', routes)

app.listen(PORT, () => console.log(`Running Server...`))
