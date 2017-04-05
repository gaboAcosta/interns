
import mongoose, {Schema} from 'mongoose'

var ContactSchema = new Schema({
  name: String,
  owner: String,
})

export default mongoose.model('Pets', ContactSchema);
