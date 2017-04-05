import ContactModel from './contact.model'

function getContacts(req, res){
  ContactModel.find({})
    .exec(function(err, result){

      console.log('Contacts response')
      console.log(arguments)

      if(err){
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }

    })

}

function createContact(req, res){

  const contactData = req.body
  const contact = new ContactModel()

  contact.name = contactData.name
  contact.telephone = contactData.telephone

  contact.save()
    .then(function(createdContact){

      res.status(200).json(createdContact)

    })

}

function getContact(req, res){
  const contactId = req.params.id

  ContactModel.findOne({
    _id: contactId
  }).exec(function(err, contact){

    if(err) return res.status(500).send(err)
    if(!contact) return res.status(404).send('Contact Not Found')

    res.status(200).json(contact)
  })
}

function updateContact(req, res){
  const contactId = req.params.id
  const newParams = req.body

  ContactModel.findOne({
    _id: contactId
  }).exec(function(err, contact){

    if(err) return res.status(500).send(err)
    if(!contact) return res.status(404).send('Contact Not Found')

    contact.name = newParams.name
    contact.telephone = newParams.telephone



    contact.save()
      .then(function(createdContact){

        res.status(200).json(createdContact)

      })
  })
}

function destroyContact(req, res){
  const contactId = req.params.id

  ContactModel.remove({
    _id: contactId
  }).exec(function(err){

    if(err) return res.status(500).send(err)

    res.status(200).send('Contact removed')
  })
}

module.exports = {
  getContacts: getContacts,
  createContact,
  getContact,
  updateContact,
  destroyContact,
}
