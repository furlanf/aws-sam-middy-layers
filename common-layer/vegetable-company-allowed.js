const createError = require("http-errors");

module.exports = () => {
  return {
    before: async handler => {
      const { event } = handler;

      const user = event.requestContext && event.requestContext.user;

      if (!user || user.company !== "vegetable-company")
        throw new createError.Unauthorized();
        
      return;
    }
  };
};
