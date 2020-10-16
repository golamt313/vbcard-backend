var express = require('express');
var router = express.Router();


router.get("/", (req, res, next) => {
    const data = {
        header: [
            {img: 'header', name: 'John Smith', title: 'Manager'}
        ],
        sections: [
            {img: 'smartphone', info: '568-603-1496', desc: 'Cell', functionType: 'tel', functionParams: `5866031496`},
            {img: 'email', info: 'email@gmail.com', desc: 'Email', functionType: 'mailto', functionParams: `email@@gmail.com`},
            {img: 'globe', info: 'tandtgraphics.com', desc: 'Website', functionType: '', functionParams: `https://tandtgraphics.com`},
            {img: 'location', info: '12345 Oak Lane, MI 48202', desc: 'Address', functionType: '', functionParams: `https://maps.google.com`},
            {img: 'facebook', info: 'https://www.facebook.com', desc: 'Facebook', functionType: '', functionParams: `https://www.facebook.com`},
            {img: 'addressbook', info: 'Save to address book', desc: 'Save', functionType: 'download', functionParams: 'MohammedKibria.vcf'}
        ]
    }
    res.send(data)
    res.download('./public/downloads/MohammedKibria.vcf')
});


module.exports = router;