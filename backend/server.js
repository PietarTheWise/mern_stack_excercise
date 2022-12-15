require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

// express app
const app = express()

app.use(express.json())

app.use((req, res, next) =>  {
	console.log("Middle: ", req.path, req.method)
	next()
})

app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log('Listening on port:', process.env.PORT)
		})
	})
	.catch((error) => {
		console.log("Cannot access database. Error:", error)
	})

