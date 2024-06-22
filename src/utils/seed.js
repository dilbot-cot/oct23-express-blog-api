const { UserModel } = require("../models/models");
const { databaseConnect, databaseClear, databaseClose } = require("./database");


async function seedUsers() {
    let userData = [
        {
            username: "dillon"
        },
        {
            username: "pikachu"
        }
    ];
    let result = await UserModel.insertMany(userData)
    console.log(result)
    return result
}

async function seedBlogPosts(usersToUse) {

}

async function seed() {
    await databaseConnect();
    await databaseClear();

    let newUsers = await seedUsers();
    let newBlogs = await seedBlogPosts(newUsers);

    console.log("Seeded the data!");
    await databaseClose();
}

seed()