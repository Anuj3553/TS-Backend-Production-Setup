import { Request } from 'express'
import responseMessage from '../constant/responseMessage'
import { THttpErrror } from '../types/types'
import config from '../config/config'
import { EApplicationEnvironment } from '../constant/application'
import logger from './logger'

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (err: Error | unknown, req: Request, errorStatusCode: number = 500): THttpErrror => {
    const errorObj: THttpErrror = {
        success: false,
        statusCode: errorStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        },
        message: err instanceof Error ? err.message || responseMessage.SOMETHING_WENT_WRONG : responseMessage.SOMETHING_WENT_WRONG,
        data: null,
        trace: err instanceof Error ? { error: err.stack } : null
    }

    // Log
    logger.error(`CONTROLLER_ERROR`, {
        meta: errorObj
    })

    // Production Env check
    if (config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete errorObj.request.ip
        delete errorObj.trace
    }

    return errorObj
}
