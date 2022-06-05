const db = require('../models')
const Videolist = db.videolists
const Video = db.video


const addVideolist = async (req, res) => {
    let info = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        video_id: req.body.video_id
    }

    const videolist = await Videolist.create(info)
    res.status(200).send(videolist)
    console.log(videolist);
}

const getAllVideoslists = async (req, res) => {
    console.log(Videolist);
    let videolists = await Videolist.findAll({})
    res.status(200).send(videolists)
}

const getOneVideolist = async (req, res) => {

    let id = req.params.id
    let videolist = await Videolist.findOne({ where: { id: id}})
    res.status(200).send(videolist)
}

const updateVideolist = async (req, res) => {

    let id = req.params.id
    const videolist = await Videolist.update(req.body, { where: { id: id}})
    res.status(200).send(video)
} 

const deleteVideolist = async (req, res) => {

    let id = req.params.id
    await Videolist.destroy({ where: { id: id}})
    res.status(200).send('videolist is deleted')
}

module.exports = {
    addVideolist,
    getAllVideoslists,
    getOneVideolist,
    updateVideolist,
    deleteVideolist
}