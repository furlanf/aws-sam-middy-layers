const middy = require("middy");
const vegetableCompany = require("../vegetable-company-allowed");
describe("when send an invalid user", () => {
  it("returns unauthorized", async () => {
    const handler = middy(async (event, context) => {});

    handler.use(vegetableCompany());

    const event = { requestContext: { user: { company: "fruit-company" } } };

    const { statusCode } = await handler(event, {});
    expect(statusCode).toEqual(401);
  });
});
