
//import { createServer } from 'http'

const express = require('express')
const next = require('next')
const routes = require('./routes')

const port = parseInt(process.env.PORT || '8000', 10)

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)


app.prepare().then(() => {

    express()
        .use(handle)
        .listen(port, err => {
            if (err) {
                throw err;
            }
            console.log(`> Ready on http://localhost:${port}`);
        });
})