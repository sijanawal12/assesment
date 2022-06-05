const db = require('../models')

const Video = db.videos

const addVideo = async (req, res) => {

    let data = {
        name: req.body.name,
        description: req.body.description,
        active:req.body.active
    }

    const video = await Video.create(data)
    res.status(200).send(video)
    console.log(video);

}


const getAllVideos = async (req, res) => {
    let videos = await Video.findAll({})
    res.status(200).send(videos)
}

const getOneVideo = async (req, res) => {

    let id = req.params.id
    let video = await Video.findOne({ where: { id: id}})
    res.status(200).send(video)
}

const updateVideo = async (req, res) => {

    let id = req.params.id
    const video = await Video.update(req.body, { where: { id: id}})
    res.status(200).send(video)
} 

const deleteVideo = async (req, res) => {

    let id = req.params.id
    await Video.destroy({ where: { id: id}})
    res.status(200).send('video is deleted')
}

module.exports = {
    addVideo,
    getAllVideos,
    getOneVideo,
    updateVideo,
    deleteVideo

}
