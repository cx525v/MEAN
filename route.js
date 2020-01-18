const express= require('express');
const router = express.Router();

// const Contact = require('../')
router.get('/contacts', (req, res) => {
//   Contact.find((error, contacts) => {
//       res.json(contacts);
//   })
});

router.post('/contact', (req, res, next) => {
//    let newContact = new Contact(
//        {

//        }
//    );

//    newContact.save((err, contact) => {
//     if (err) {

//     } else {

//     }
//    });
});

router.delete('/contact/:id', (req, res, next) => {
    // Contact.remove({_id: req.params.id }, (err, result) => {
    //     if (err) {
    //        res.json(err);
    //     } else {
    //         res.json(result);
    //     }
    // });
})

module.exports = router;