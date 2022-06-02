import express, { Router } from 'express';


const router = express.Router();


router.get("/" , ( req: express.Request , res: express.Response)=>{
    res.send("hello this is room")
})


export default router