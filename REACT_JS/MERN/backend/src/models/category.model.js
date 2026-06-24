/* Imported packages/files */
import { mongoose } from 'mongoose';


/* Schema created here */
const categorSchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
    trim: true,
  },

  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  description: {
    type: String,
    required: true,
  },

  categoryImage: {
    type: String,
    required: true,
  },

  productCount: {
    type: Number,
    default: 0,
  },

  isActive: {
    type: Boolean,
    default: true,
  },
},
  {
    timestamps: true,
  }
);

/* Model created here */
const categoryModel = mongoose.model("category", categorSchema);

export default categoryModel;
