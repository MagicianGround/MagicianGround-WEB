import Express, { Request, Response } from "express";

const router = Express.Router()

router.use((req : Request, res : Response) => {
    res.status(404).json({
        message : "Page not foud",
        status : "404"
    })
})

export default router