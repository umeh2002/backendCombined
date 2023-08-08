import cors from "cors"
import express, { Application, Request,Response } from "express"
import auth from "./Router/authRouter"
import task from "./Router/taskRouter"

const main =(app:Application)=>{
    app.use(express.json())
    app.use(cors())

    app.get("/", (req: Request, res: Response) => {
        try {
          res.status(200).json({
            message: "Welcome Page!!!",
          });
        } catch (error) {
          res.status(404).json({
            message: "error",
          });
        }
      });

    app.use("/api/v1/auth" , auth)
    app.use("/api/v1/task" , task)
}

export default main