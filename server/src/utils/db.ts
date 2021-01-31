import config from 'config';
import mongoose from 'mongoose';

export default class DB {
  static Schema(
    schema: mongoose.SchemaDefinition,
    options?: mongoose.SchemaOptions
  ) {
    return new mongoose.Schema(
      schema,
      options || {
        toJSON: {
          virtuals: true,
          versionKey: false,
          transform: (_: any, ret: any) => {
            delete ret._id;
          },
        },
      }
    );
  }

  static async connect() {
    try {
      const { db, user, password } = config.db;
      const uri = `mongodb+srv://${user}:${password}@cluster0.7hiwp.mongodb.net/${db}?retryWrites=true&w=majority`;
      await mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
      });
      console.log('DB connected');
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
}
