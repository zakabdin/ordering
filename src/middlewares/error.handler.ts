import { Response } from "express";


export class NotFoundException extends Error {
    private statusCode = 404;
    constructor(message: string) {
        super();
        this.message = message || 'Not Found';
    }
}


export class BadRequestException extends Error {
    private statusCode = 400;
    constructor(message: string) {
        super();
        this.message = message || 'Bad Request';
    }
}

export class ValidationException extends Error {
    private statusCode = 422;
    private errors;
    constructor(errors: object) {
        super();
        this.errors = errors || 'Validation Error';
    }
}


export const handleError = (err: any, res: Response) => {
    let { statusCode, message, errors } = err;
    if (!statusCode) {
        statusCode = 500;
        message = process.env.mode === 'production' ? 'Server Error' : message;
    }
    logErrors(statusCode, err);
    res.status(statusCode).json({ error: message || errors });
};

function logErrors(status: any, error: any) {
    return;
}
