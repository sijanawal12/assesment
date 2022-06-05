

const videoConnect = require('../controller/videolistscontroller');
const videoConnect2 = require('../controller/videocontroller');
const router = require('express').Router();

// router.get('/test', (req, res) => {
//     res.json({ message: 'hello'})
// })
router.post('/videolist', videoConnect.addVideolist)

router.get('/videolist', videoConnect.getAllVideoslists)

router.get('/videolist/:id', videoConnect.getOneVideolist)

router.put('/videolist/:id', videoConnect.updateVideolist)

router.delete('/videolist:id', videoConnect.deleteVideolist)


router.post('/video', videoConnect2.addVideo)

router.get('/video', videoConnect2.getAllVideos)

router.get('/video/:id', videoConnect2.getOneVideo)

router.put('/video/:id', videoConnect2.updateVideo)

router.delete('/video/:id', videoConnect2.deleteVideo)


module.exports = router;