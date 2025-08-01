import { Connection } from 'mongoose'
import { RateLimiterMongo } from 'rate-limiter-flexible'

export let rateLimiterMongo: null | RateLimiterMongo = null

const DURATION = 60 // 60 seconds
const POINTS = 10 // 10 requests

export const initRateLimiter = (mongooseConnection: Connection) => {
    rateLimiterMongo = new RateLimiterMongo({
        storeClient: mongooseConnection, // MongoDB connection
        points: POINTS, // Number of requests
        duration: DURATION // Per second
    })
}
