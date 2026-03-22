import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    const url = process.env.MONGO_URL;
    await mongoose.connect(url);
    console.log('✅ MongoDB connection established successfully');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  }
};
