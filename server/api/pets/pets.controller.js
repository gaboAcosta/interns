import PetModel from './pets.model'

function getPets(req, res){
  PetModel.find({})
    .exec(function(err, result){

      if(err){
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }

    })

}

function createPet(req, res){

  const petData = req.body
  const pet = new PetModel()

  pet.name = petData.name
  pet.owner = petData.owner

  pet.save()
    .then(function(createdPet){

      res.status(200).json(createdPet)

    })

}

function getPet(req, res){
  const petId = req.params.id

  PetModel.findOne({
    _id: petId
  }).exec(function(err, pet){

    if(err) return res.status(500).send(err)
    if(!pet) return res.status(404).send('Pet Not Found')

    res.status(200).json(pet)
  })
}

function updatePet(req, res){
  const petId = req.params.id
  const newParams = req.body

  PetModel.findOne({
    _id: petId
  }).exec(function(err, pet){

    if(err) return res.status(500).send(err)
    if(!pet) return res.status(404).send('Pet Not Found')

    pet.name = newParams.name
    pet.owner = newParams.owner



    pet.save()
      .then(function(createdPet){

        res.status(200).json(createdPet)

      })
  })
}

function destroyPet(req, res){
  const petId = req.params.id

  PetModel.remove({
    _id: petId
  }).exec(function(err){

    if(err) return res.status(500).send(err)

    res.status(200).send('Pet removed')
  })
}

module.exports = {
  getPets,
  createPet,
  getPet,
  updatePet,
  destroyPet,
}
