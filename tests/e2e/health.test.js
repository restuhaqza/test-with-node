const request = require('supertest')
const container = require('../../app/container')

let app
describe('GET /health', ()=>{
    beforeAll(async()=>{
        app = await container.load()
    })

    it('should success', async()=>{
        const res = await request(app).get('/health')

        expect(res.status).toBe(200)
        expect(res.body).toMatchObject({
            status:true
        })
    })
})