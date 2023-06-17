import knex from '../../config/knex/knex.js'

export default defineEventHandler(async (event) => {
    const data = await knex.select('*')
    .from('_jenis_cuti')

    return {
        data: data
    }
})