var expressFunction = require('express')
const jwt = require('jsonwebtoken')

const router = expressFunction.Router()
const mongoose = require('mongoose')
const bcr = require('bcryptjs')