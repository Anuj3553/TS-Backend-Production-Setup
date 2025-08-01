import app from './app'
import config from './config/config'
import db from './service/db'
import logger from './util/logger'

const server = app.listen(config.PORT)

// Immediately invoked function expression to handle server startup

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
    try {
        // Database connection
        const connection = await db.connect()
        logger.info(`DATABASE_CONNECTION`, {
            meta: {
                host: connection.host,
                port: connection.port,
                name: connection.name
            }
        })

        logger.info(`APPLICATION_STARTED`, {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL
            }
        })
    } catch (err) {
        logger.error(`APPLICATION_ERROR`, { meta: err })

        server.close((error) => {
            if (error) {
                logger.error(`APPLICATION_ERROR`, { meta: err })
            }

            process.exit(1)
        })
    }
})()
