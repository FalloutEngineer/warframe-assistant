import mongoose, { Schema } from "mongoose"

const resourceGroupSchema = new Schema({
  owner: { type: String, unique: false, required: true },
  order: { type: Number, unique: true, required: true },
  title: { type: String, unique: false, required: true },
  items: [
    {
      name: { type: String, unique: false, required: true },
      currentAmount: { type: Number, unique: false, required: true },
      maxAmount: { type: Number, unique: false, required: true },
      description: { type: String, unique: false, required: false },
    },
  ],
})

const ResourceGroup =
  mongoose.models.ResourceGroup ||
  mongoose.model("ResourceGroup", resourceGroupSchema)

export default ResourceGroup
