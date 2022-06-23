const request = require('supertest')
const container = require('../../app/container')
const db = require('../../db')

const noteModel = require('../../models/notes')

let app

describe('POST /note', ()=>{
    beforeAll(async()=>{
        app = await container.load()
    })

    beforeEach(async()=>{
        await db.clean()
    })

    it('should success', async()=>{
        const body = {
            title: "Hello",
            description: "This is description"
        }

        const res = await request(app).post('/note').send(body)

        const note = await noteModel.findOne()

        expect(res.status).toBe(200)
        expect(res.body).toMatchObject(body)

        console.log(res.body)

        expect(res.body._id).toBe(note._id.toString())
    })
})