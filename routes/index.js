import express from 'express'
import fs from 'fs'
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

//define manually
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const router = express.Router();

//load all route files
const routeFiles = fs.readdirSync(__dirname).filter(
    (file) => file.endsWith('Routes.js')
);

for(const file of routeFiles){
    const route = await import(`./${file}`);
    router.use(route.default)
}

export default router;