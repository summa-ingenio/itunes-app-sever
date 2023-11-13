const request = require("supertest");
const app = require("./index");

describe("GET /api/search", () => {
  test("It should respond with status 200 and JSON", async () => {
    const response = await request(app).get("/api/search?term=test&media=all");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  test("It should handle errors and respond with status 500", async () => {
    const response = await request(app).get("/api/search");
    expect(response.statusCode).toBe(500);
  });
});
