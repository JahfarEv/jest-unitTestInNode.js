const supertest = require('supertest')
const app = require('../App')
describe("todo", ()=>{
    describe("get todo route", ()=>{
        describe("given the product does not exist", ()=>{
            it("should return a 401", async()=>{
                // const todoId = "todo-123"

                await supertest(app).get(`/api/user/get-todos`).expect(401)
            })
        })
    })
})