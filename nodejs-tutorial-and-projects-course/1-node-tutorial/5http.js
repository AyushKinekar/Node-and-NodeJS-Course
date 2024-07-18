const http=require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end('Welcome to the Home page.') 
        return
    }
    if (req.url === '/about'){
        res.end('This is the about page.')
        return
    }
    res.end(`<h1>Error</h1>
    <p>We could not find the requsted page</p>
    <a href="/">Home Page</a>`)
})
server.listen(5000)