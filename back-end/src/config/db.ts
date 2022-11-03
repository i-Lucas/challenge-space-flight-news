import pkg from "@prisma/client";
import dotenv from "dotenv";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

dotenv.config();

(async function () {

  if(process.env.MODE !== "TEST") // todo: jest warning cannot log after tests are done .. 
  await prisma.$connect()
    .then(() => console.log("connected to database at " + new Date().toLocaleString("pt-br")))
    .catch(err => console.log("failed to connect to database " + err));

})()


export default prisma;