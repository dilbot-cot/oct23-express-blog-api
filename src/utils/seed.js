const { UserModel, BlogModel } = require("../models/models");
const { comparePasswords, createJWT, validateJwt } = require("./authHelpers");
const { databaseConnect, databaseClear, databaseClose } = require("./database");


async function seedUsers() {
    let userData = [
        {
            username: "dillon",
            password: "password"
        },
        {
            username: "pikachu",
            password: "pokemon"
        },
        {
            username: "newUser",
            password: "Order 66"
        }
    ];

    let result = await Promise.all(userData.map(async (user) => {
        let newUser = await UserModel.create(user);
        return newUser;
    }));

    console.log(result)
    return result
}

async function seedBlogPosts(usersToUse) {
    let blogData = [
        {
            title: "First blog post!",
            content: "lorem ipsum",
            author: usersToUse[0].id,
            headerImage: "https://placehold.co/600x400/EEE/31343C",
            tags: ["seeded", "blog", "pokemon"],
            categories: ["coding"]
        },
        {
            title: "Second blog post!",
            content: "lorem ipsum dolor!",
            author: usersToUse[1].id,
            headerImage: "https://placehold.co/600x400/EEE/31343C",
            tags: ["seeded"],
            categories: ["photography", "life"]
        },
        {
            title: "Third blog post!",
            content: "dolor ipsum dolor",
            author: usersToUse[0].id,
            headerImage: "https://placehold.co/600x400/EEE/31343C",
            tags: ["seeded", "it's new"],
            categories: ["photography"]
        }
    ]
    let result = await BlogModel.insertMany(blogData)
    console.log(result)
    return result
}

async function seed() {
    await databaseConnect();
    await databaseClear();

    let newUsers = await seedUsers();
    let newBlogs = await seedBlogPosts(newUsers);
    let newJwt = createJWT(newUsers[0]._id);
    console.log("New JWT: " + newJwt)

    validateJwt(newJwt)

    console.log("Seeded the data!");
    await databaseClose();
}

seed()