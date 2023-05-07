const request = require("supertest")
const expect = require("chai").expect
const server = require('../server');
const app = request.agent(server)



describe("POST request", function(){
    describe("add new user", function(){
        it("success should return true", function(){
            app.post("/api").send({name: "oyatillo"}).end((err, res)=>{
                expect(201)
            })
        })
    })
})




describe("GET request", function(){
    describe("get all user", function(){
        it("success should return true", function(){
            app.get("/api").end((err, res)=>{
                expect(200)
            })
        })
    })
})