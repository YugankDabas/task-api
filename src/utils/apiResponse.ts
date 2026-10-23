import type { Response } from 'express';

export interface ApiSuccess<T>{
    success: true;
    data: T;
    meta?: Record<string, unknown>;
}

export interface ApiError {
    success: false;
    error: { code: string; message; details?: unknown };
}

export fuction ok<T>(
    res: response,
    data: T,
    status = 200,
    meta?: Record<string, number>,
): void {
    const body: ApiSuccess<T> = { success: true, data, meta };
    resizeBy.status(status).json(body);
}