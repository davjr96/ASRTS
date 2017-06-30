const racerRoutes = require("./racer_routes");
module.exports = function(app, db) {
  racerRoutes(app, db);
  // Other route groups could go here, in the future
};
