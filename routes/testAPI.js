var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const db = mysql.createConnection({
   user: 'root',
   host: 'localhost',
   password: 'password',
   database: 'FakeDatabase'
});



router.get("/", (req, res, next) => {
    const data = {
        header: [
            {img: 'header', name: 'Mohammed Kibria', title: 'Manager'}
        ],
        sections: [
            {img: 'smartphone', info: '313-603-1496', desc: 'Cell', functionType: 'tel', functionParams: `3136031496`},
            {img: 'email', info: 'ttprintus@gmail.com', desc: 'Email', functionType: 'mailto', functionParams: `ttprintus@gmail.com`},
            {img: 'globe', info: 'tandtgraphics.com', desc: 'Website', functionType: '', functionParams: `https://tandtgraphics.com`},
            {img: 'location', info: '9559 Charest Street, MI 48212', desc: 'Address', functionType: '', functionParams: `https://goo.gl/maps/Nn2CRthgPbh2i6hCA`},
            {img: 'facebook', info: 'facebook.com/kibria.golam.77', desc: 'Facebook', functionType: '', functionParams: `https://www.facebook.com/kibria.golam.77`},
            {img: 'addressbook', info: 'Save to address book', desc: 'Save', functionType: 'download', functionParams: 'MohammedKibria.vcf'}
        ]
    }
    res.send(data)
    res.download('./public/downloads/MohammedKibria.vcf')
});


module.exports = router;