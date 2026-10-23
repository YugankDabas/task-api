import express, { type Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { env } from './config/env.ts';

export function createApp(): Express {
    const app = express();

    app.use(helmet());
    app.use(cors({origin: env.CORS_ORIGIN, credentials: true}));
    app.use(compression());
    app.use(express.json({limit: '1mb'}));
    app.use(express.urlencoded({extended: true}));

    app.get('/health', (_req, res) => {
        res.json({status: 'ok', uptime: process.uptime() });
    });
    return app;
}

export const app = createApp();