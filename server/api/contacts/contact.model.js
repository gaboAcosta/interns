
import mongoose, {Schema} from 'mongoose'

var ContactSchema = new Schema({
  name: String,
  telephone: String,
})

export default mongoose.model('Contact', ContactSchema);
