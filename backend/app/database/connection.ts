import mongoose from 'mongoose';

const mongoDbUrl = process.env.MONGO_URI || '';
const databaseName = process.env.DB_NAME || 'academic';

const connection = async () => {
  try {
    const database = await mongoose.connect(mongoDbUrl, {
      dbName: databaseName,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Connected to ${database.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};

export default connection;
