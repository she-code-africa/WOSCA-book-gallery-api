# book-gallery-api
A simple authentication API for the [books gallery app](https://github.com/she-code-africa/WOSCA-book-gallery)

## Core Technologies
1. NodeJS/Express
2. Postgres/Sequelize ORM


## To get started
1. Clone the repository: 
    ```
    git clone https://github.com/she-code-africa/WOSCA-book-gallery-api
    ```

2. Ensure you have installed [NodeJS](https://nodejs.org/en/) and [Postgres](https://www.postgresql.org/download/)

3. Navigate into the app's root directory: 
    ```
    cd WOSCA-book-gallery-api
    ```

### Database Setup
1. Create a Postgres database for your local development with any name of your choice.

2. Create a `.env` file in the root directory using the sample `.env.sample` file and update the database URL with your connection credentials

2. Globally install sequelize cli
    ```
      npm install -g sequelize-cli
    ```
3. Run migrations
    ```
      sequelize db:migrate
    ```

### Development
1. Install all dependencies: 
    ```
      npm install
    ```

2. Install all dependencies: 
    ```
      npm run start:dev
    ```

### Contributing
Refer to the contribution guidelines for this project [here](CONTRIBUTION.md)