// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// async function main() {
//     // const allUsers = await prisma.jenis_cuti.findMany({
//     //     include: {
//     //         posts: true,
//     //         profile: true,
//     //     },
//     // })

//     const allUsers = await prisma.$queryRaw`select * from _jenis_cuti`

//     return allUsers
// }

async function getData() {
    const knex = require('knex')({
        client: 'pg',
        connection: {
            host: 'tma.ip-dynamic.com',
            port: 5432,
            user: 'tmadev',
            password: 'userd3v@tm4',
            database: 'SDM'
        }
    });

    const data = await knex.select('*')
    .from('_jenis_cuti')

    return data

}