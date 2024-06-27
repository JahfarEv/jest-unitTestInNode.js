// const user = require('../apis/controller/userController')

// describe('user service', ()=>{
//     test('does nothing if seprartion is already correct', () => {
//         const {name} =  user.name('john')
//         expect(name).toEqual('john')
//     })
    
// })

const app = require('../App')
const supertest = require('supertest')

describe('register', ()=>{
    it('return bad request', async()=>{
const response  = await supertest(app).post('/api/user/signup').send({});

expect(response.statusCode).toEqual(422);

    })
})