# Simple Restfull API with ExpressJs, Prisma ORM, and Mysql

### Built with
- [ExpressJs](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [Mysql](https://www.mysql.com/)

### Schema Database
![Schema Database](https://res.cloudinary.com/plugin007/image/upload/v1614033636/Screenshot_from_2021-02-23_05-36-30_p5gvu0.png)

### API Documentation
API Documentation is coming soon :satisfied: :satisfied:

----------


## Getting Started

### Requirements
- [NodeJS](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository
   ```
   git clone https://github.com/felixyunianto/express-prisma.git
   ```
2. Install packages inside node_modules.
   ``` 
   yarn 
   ```
3. Set up Prisma project by creating Prisma Schema file template with the command
   ```
    npx prisma init
   ```
4. Create a new database on MySQL
5. Connect your database, set the provider field on the datasource block in **prisma/schema.prisma**
    ```
    datasource db {
       provider = "mysql"
       url      = env("DATABASE_URL")
    }
    ```
6. Set up your DB_DATABASE on .env file.
   ```
    DB_DATABASE="mysql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
   ```
   Here's a short explanation of each component:
   - USER : The name of your database user.
   - PASSWORD : The password for your database user.
   - PORT : The port where your database server is running (typically **3306** for MySQL)
   - DATABASE : The name of database.
   - SCHEMA : The name of schema inside the database.
7. Define your model schema on **prisma/schema.prisma**
   ```
   model categories {
     id Int @id @default(autoincrement())
     categoryName String @db.VarChar(50)
     products products[]
   }

   model products {
     id Int @id @default(autoincrement())
     productName String @db.VarChar(50)
     category categories? @relation(fields: [categoryId], references: [id])
     categoryId Int?
   }

   model users {
     id Int @id @default(autoincrement())
     name String @db.VarChar(50)
     username String @db.VarChar(50) @unique
     email String @db.VarChar(50) @unique
     password String @db.Text
     createdAt DateTime @default(now())
     updateAt DateTime @default(now()) @updatedAt
   }
   ``` 
8. Generate the PrismaClient from node_modules/@prisma/client so that it can run database queries.
   ```
    npx prisma generate
   ```
9.  Migrate your model to create tables on your database
    ```
    npx prisma migrate dev --preview-feature
    ```
10. Add a new environment variable **SECRET_KEY** to the .env file
    ```
    SECRET_KEY=up to you
    ```
11. Run the project with command
    ```
    yarn server
    ```
12. Done, Have fun :wink: