import express from 'express'
import { PostForum } from '../models/schemas'
let router = express.Router()

/* GET / */
router.get('/api/post_forums', function (req, res, next) {
    PostForum.find().exec((err, forums) => {
        if (err) {
            res.json({ success: false, message: 'Failed query' })
        } else {
            res.write(JSON.stringify(forums))
            res.end()
        }
    })

})

router.post('/api/post_forums/create', function (req, res, next) {
    console.log(req.body)
    new PostForum(req.body).save(err => {
        if (err) {
            res.json({ success: false, message: 'unable to save post' })
        } else {
            res.end()
        }
    })
})

router.get('/api/post_forums/:id', function (req, res, next) {
    PostForum.findById(req.params.id, (err, forum) => {
        if (err) {
            res.json({ success: false, message: 'Failed query' })
        } else {
            res.write(JSON.stringify(forum))
            res.end()
        }
    })
})



router.put('/api/post_forums/:id/update', function (req, res, next) {
    PostForum.findById(req.params.id, (err, forum) => {
        if (err) {
            res.json({ success: false, message: 'Failed query' })
        } else {
           //console.log(req.body)
           Object.assign(forum, req.body)
           forum.save(err => {
               if(err){
                res.json({ success: false, message: 'Unabled to update blog' })
               }else{
                   res.end()
               }
           })
        }
    })
})

router.delete('/api/post_forums/:id/delete', function (req, res, next) {
    PostForum.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            res.json({ success: false, message: 'Failed to delete or blog is not found' })
        } else {
            res.end()
        }
    })
})


export { router }