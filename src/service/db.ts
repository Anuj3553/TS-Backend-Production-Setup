import mongoose from 'mongoose'
import config from '../config/config'

export default {
    connect: async () => {
        try {
            await mongoose.connect(config.DATABASE_URL as string)
            return mongoose.connection
        } catch (error) {
            throw new Error(`Database connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
        }
    }
}
