const { UserModel, BlogModel } = require("../models/models");
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
        }
    ];

    let thirdUser = {
        username: "newUser",
        password: "Order 66"
    }

    let newUser = await UserModel.create(thirdUser);
    await newUser.save()

    let result = await UserModel.insertMany(userData)
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

    console.log("Seeded the data!");
    await databaseClose();
}

seed()