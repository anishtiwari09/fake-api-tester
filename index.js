const express=require('express')
const app=express()
const axios=require('axios')
const path=require('path')
const cors=require('cors')
let checkInData=require('./Data/CheckInData/checkIn')()
let checkOut=require('./Data/CheckoutData/CheckoutData')()
let responseData=require('./Data/ResponseData/ResponseData')()
require('dotenv').config()
let PORT=process.env.PORT
app.use(cors())
app.get('/',(req,res)=>{
    return res.status(200).json({msg:"success",status:200})
})
app.get("/check-in",(req,res)=>{
    res.status(200).json(checkInData)
})
app.get('/',express.static('/public'))
app.get("/response-data",(req,res)=>{
    res.status(200).json(responseData)
})
app.get("/check-out",(req,res)=>{
    res.status(200).json(checkOut)
})
app.listen(PORT,()=>{
    
})