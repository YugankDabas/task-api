import { app } from './app.ts';
import { env } from './config/env.ts'

const server = app.listen(env.PORT, () => {
    console.log('server running on http://localhost:${env.PORT}');
});

export { server }
