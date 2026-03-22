import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  const url = process.env.MONGO_URL;
  await mongoose.connect(url);
  console.log('✅ MongoDB connection established successfully');
};
