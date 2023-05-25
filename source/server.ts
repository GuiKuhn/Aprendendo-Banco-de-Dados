import express from 'express';
import { PrismaClient } from '@prisma/client'
import routes from './routers/routers'

const app = express();
const port = 5000
const prisma = new PrismaClient();

app.use(express.json())

app.use('/', routes)

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})

