import express, { Router } from 'express';


const router = express.Router();


router.get("/" , ( req: express.Request , res: express.Response)=>{
    res.send("hello this is auth")
})

router.get("/register" , ( req: express.Request , res: express.Response)=>{
    res.send("hello this is register")
})

export default router