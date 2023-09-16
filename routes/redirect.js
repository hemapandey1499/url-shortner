const express = require('express')

const router = express.Router()

const Url = require('../models/Url')

// @route       GET /:code
// @description    Redirect to the long/original URL 
router.get('/:code', async(req, res)=>{
    try{
        console.log(req.params.code)
        const url = await Url.findOne({urlCode: req.params.code})
        console.log(url)
        if(url){
            return res.redirect(url.longUrl)
        }
        else{
            return res.status(404).json('No URL Found')
        }

    }
    catch(err){
        console.error(err)
        res.status(500).json('Server Error')
    }
})


module.exports = router
