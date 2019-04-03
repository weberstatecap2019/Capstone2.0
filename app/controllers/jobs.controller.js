import express from 'express'
import { Jobs } from '../models/schemas'
let router = express.Router()

/* GET / */
router.get('/api/jobs', function (req, res, next) {
    Jobs.find().exec((err, jobs) => {
        if (err) {
            res.json({ success: false, message: 'Failed query' })
        } else {
            res.write(JSON.stringify(jobs))
            res.end()
        }
    })

})

router.post('/api/jobs/create', function (req, res, next) {
    new Jobs(req.body).save(err => {
        if (err) {
            res.json({ success: false, message: 'unable to save job' })
        } else {
            res.end()
        }
    })
})

router.get('/api/jobs/:id', function (req, res, next) {
    Jobs.findById(req.params.id, (err, job) => {
        if (err) {
            res.json({ success: false, message: 'Failed query' })
        } else {
            res.write(JSON.stringify(job))
            res.end()
        }
    })
})



router.put('/api/jobs/:id/update', function (req, res, next) {
    Job.findById(req.params.id, (err, job) => {
        if (err) {
            res.json({ success: false, message: 'Failed query' })
        } else {
           //console.log(req.body)
           Object.assign(job, req.body)
           job.save(err => {
               if(err){
                res.json({ success: false, message: 'Unabled to update job' })
               }else{
                   res.end()
               }
           })
        }
    })
})

router.delete('/api/projects/:id/delete', function (req, res, next) {
    Project.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            res.json({ success: false, message: 'Failed to delete or project is not found' })
        } else {
            res.end()
        }
    })
})


export { router }