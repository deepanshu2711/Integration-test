import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import { app } from "..";
import request from "supertest";
import resetDb from "./helpers/reset-db";

describe("POST /sum", () => {
    // if you want a piece of code to run before each test, you can use the `beforeEach` 
    //before each it-block run 

    // beforeEach(async() =>{
    //     console.log("clearing the database")
    //     await resetDb();
    // })

    // if you want a piece of code to run before all tests, you can use the `beforeAll` 
    //before all it-blocks run just run this once
    beforeAll(async() =>{
        console.log("clearing the database")
        await resetDb();
    })



    it("should sum add 2 numbers", async () => {
        const { status, body } = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: 3, id: expect.any(Number) });
    });
})