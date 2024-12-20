import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("GET /api/v1/products", () => {
  describe("Anonymous user", () => {
    test("Retrieving products", async () => {
      const response = await fetch("http://localhost:3000/api/v1/products");

      expect(response.status).toBe(200);

      const responseBody = await response.json();

      expect(typeof responseBody).toBe("object");
      expect(responseBody).toHaveProperty("male");
      expect(responseBody).toHaveProperty("female");
    }, 5000);
  });
});
