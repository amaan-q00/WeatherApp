const express = require('express')
const path = require('path')
const hbs = require('hbs')
const weather = require('./utils')
const port = process.env.PORT || 3000

const app = express()

const root = path.join(__dirname, '/public')
const partials = path.join(__dirname, '/partials')

app.set('view engine', 'hbs')
app.use(express.static(root))

hbs.registerPartials(partials)


//homepage
app.get('', (req, res)=> {
  res.render('index', {
    title: 'HOME',
    text: 'This is homepage',
    name: 'Amaan'
  })
})

//weather
app.get('/weather', (req, res)=> {
  if (!(req.query.search)) {
    return res.send({
      error: 'No data is provided'
    })
  }

  weather(req.query.search, (error, data)=> {
    if (error) {
      return res.send({
        error
      })
    } else {
      return res.send(data)
    }

  })
})

//help
app.get('/help', (req, res)=> {
  res.render('help',
    {
      title: 'HELP',
      text: 'This is help page',
      name: 'Amaan'
    })
})

//about
app.get('/about', (req, res)=> {
  res.render('about',
    {
      title: 'ABOUT',
      text: 'This is about page',
      name: 'Amaan'
    })
})

//error help
app.get('/help/*', (req, res)=> {
  res.render('help_error',
    {
      title: '404 ERROR',
      text: `THE HELP PAGE YOU'RE LOOKING FOR DOES NOT EXIST `,
      name: 'Amaan'
    })
})

//error
app.get('*', (req, res)=> {
  res.render('error',
    {
      title: '404 ERROR',
      text: 'THIS PAGE DOES NOT EXISTS',
      name: 'Amaan'
    })
})


app.listen(port, ()=> {
  console.log('App is running on port '+port)
})
