import mongoose from 'mongoose';

export const connectDB = async () => {
    const nombredb = process.env.DATABASE || 'example';
    try {
        await mongoose.connect('mongodb://127.0.0.1/'+nombredb);
        console.log('>>> DB esta conectada.');    
    
    } catch (error) {
       console.log(error);
    }
}
