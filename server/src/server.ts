import Express from 'express';


const app = Express();

app.use(Express.json());


//Routes


const port = process.env.PORT ?? 3000; 
app.listen(port, () => {
    console.log("Server Running in", 3000);    
})