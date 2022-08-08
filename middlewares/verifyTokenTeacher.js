//1-require jsonwebtoken
const jwt = require('jsonwebtoken')

//2-require teacher schema 
const Teacher = require('../models/Teacher')

const VerifyTokenTeacher = async (req, res, next) => {
    try {
        const teacherToken = req.headers['authTeacherToken']
        //checking valid token
        if (!teacherToken) {
            return res.status(400).json({msg: "Invalid token"})
        }

        //decode token
        const decoded = await jwt.verify(teacherToken, process.env.SECRET_KEY_TEACHER)

        //find the teacher
        const teacher = await Teacher.findById(decoded.id)

        if (!teacher) {
            return res.status(403).send({msg: "authorization forbidden"})
        }

        req.teacher = teacher
        next()
    } catch (error) {
        return res.status(500).send({msg: "Invalid token"})
    }
}

module.exports = VerifyTokenTeacher