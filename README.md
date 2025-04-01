# Workshop Acme Employees 

-Summary:
-Used Express.js to build a RESTful API.
-Connected the app to a PostgreSQL database (acme_hr_db) using pg.
-Created an employees table with the following fields:
  -id, name, is_admin (boolean).
--Seeded the table with 3 employees: Alice, Bob, and Charlie.
-Built a single API route:
  -GET /api/employees → Returns a list of all employees.
-Used vite build to generate a frontend build in dist/.
-Configured Express to serve static frontend files from the dist/ folder.
-Tested full integration — frontend displayed employees on load.
-Fully deployed-style file structure:
  -server/index.js for Express server.
  -client/src/ for frontend logic (main.jsx).
-Used nodemon for development.

