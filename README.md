# postgresql-node-todo
This is a single page to-do application with Node, Express, Angular and PostgreSQL. Using 

### Todos

 - Start by installing the Express generator if you don't already have it
    ```sh
        $ npm install -g express-generator@4
    ```
 - Then create a new project and install the dependencies:
    ```sh
        $ express node-postgres-todo
        $ cd node-postgres-todo && npm install
    ```
 - Install PostgreSQL db and mode pg module
    ```sh
        $ npm install pg --save
    ```
 - Create todo database then run build script
    ```sh
        $ npm node server/models/database.js
    ```
 - Start node server