import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export default async () => {
  //prisma.transaction =>  allow the running of seruence of read/write functions that ate garenteed to suceed or fail as whole
  await prisma.$transaction([
    prisma.request.deleteMany(),
  ])
}
