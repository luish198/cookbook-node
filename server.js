const express = require('express');


const app = express();
app.set('view engine','ejs')

//importing routers:
const homeRouter =require('./routes/home')
app.use('/', homeRouter);

const recipesRouter = require('./routes/recipes')
app.use('/recipes', recipesRouter);

const newRouter=require('./routes/new')
app.use('/new',newRouter)

const recipeRouter = require('./routes/recipe')
app.use('/recipe', recipeRouter)


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).render('home.ejs')
})


app.listen(process.env.PORT || 3000, ()=>{console.log("server running")});


