
const express = require ('express')
const { stringify } = require('querystring')
const app = express()

app.use ("/Images",express.static(__dirname + "/Images"));

//Create database
 let readers =[]

//Create a route to the home
app.get('/', function (req, res){
    res.sendFile(__dirname +'/create.html')

})
//Create reader with name and Book Title
app.get('/create', function(req, res){
    let reader = {
        Name: req.query.Name,
        Book_Title: req.query.title
    }
    readers.push(reader)
    res.status(202).redirect('/')

})
//Create route to show number of books and readers name from the readers input
app.get('/search', function (req, res){
    res.sendFile(__dirname +'/search.html')
})

//Show all data
app.get('/show_all', function(req, res){
let all_readers = JSON.stringify(readers)
res.send(all_readers)
})
//Route to show all
app.get('/all_data', function (req, res){
    res.sendFile(__dirname +'/all_data.html')
})
//Create route to show favorites
app.get('/favorite', function (req, res){
    res.sendFile(__dirname +'/favorite.html')
})

//Route to show the list of books and readers
app.get('/show', function (req, res) {  
    let Name = req.query.Name
    let match = false
    let user_data = undefined
    

    for(let reader of readers){
        if(reader.Name===Name){
        match = true;
        user_data = JSON.stringify(reader)
        break}
    }
    if(match===false){
        user_data =`**SORRY THERE IS NO RECORD OF** ${Name}`

    }
    res.send(user_data)
    
})

//Function that calculates the number of readers with favorites books
app.get('/favorites',function(req, res){

    let count = 0;
    let book_title=JSON.stringify(readers.title)
    
    for (reader of readers){
        if(reader.title===book_title){
            let total=count+=1
            console.log(total)
            
        }if(reader.title===book_title){
            let book = book_title
            console.log(book)

        }
        
    }
    //res.send("THE TOTAL NUMBER OF READERS ARE:  "+ count)
    res.send("THE FAVORITE BOOK TITLE IS: " + book_title +" & HAS TOTAL NUMBER OF: " + count + " READERS")
    
})

    /*let favorites = 0;
    let title = ''
  
    

        for (let reader of readers){
            //console.log(reader)
	        if (reader.title === title){
                //favorites = favorites +=1
                let calculate = title +=1
                favorites += calculate
                
                //console.log(favorites)
	            //favorites = reader.title 
	            //title = reader.title 
            }
            //console.log(sum)
        }

console.log(title)
res.send("The Favorite Book title is:  "+ title)
})*/

app.listen(8020)
console.log("Server is up on port 8020")