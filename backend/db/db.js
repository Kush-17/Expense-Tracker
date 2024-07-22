const mongoose = require('mongoose')

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Database Connected Successfully'.blue);
    } catch (error) {
        console.log('Database Connection Error'.red);
    }
}

module.exports = {db}