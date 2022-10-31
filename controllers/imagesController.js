const uploadFile = require('../middleware/uploadFile')

const uploadImages = async (req, res) => {
    try {
        await uploadFile(req, res)
        if (req.images == undefined) {
            return res.json({ success: false, message: "No Image Selected" })
        }
        return res.json({ success: true, message: "Image Uploaded Successfully" })
    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: "Internal Server Error Occured" })
        
    }
}

module.exports = { uploadImages }