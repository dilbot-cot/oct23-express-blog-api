const { app } = require("./server");
const { databaseConnect } = require("./utils/database");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server successfully started");

    // After server starts - connect to the database
    databaseConnect();
})