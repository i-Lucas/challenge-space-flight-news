import { describe, expect } from '@jest/globals';

import supertest from "supertest";
import app from "../src/app.js";

describe("testing route -> /", () => {

  it("should return status 200 and a welcome message", async () => {
    const res = await supertest(app).get("/").send();
    expect(res.status).toEqual(200);
    expect(res.text).toEqual("Fullstack Challenge 2021 🏅 - Space Flight News");
  });

});