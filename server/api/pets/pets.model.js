
import mongoose, {Schema} from 'mongoose'

var PetSchema = new Schema({
  name: String,
  owner: String,
})

export default mongoose.model('Pets', PetSchema);
