const fs = require('fs')

const readStream = fs.createReadStream('largeText.txt',{
    encoding:'utf-8'
});
const writeStream = fs.createWriteStream("writeStream.txt")
// readStream.on('data' , chunk =>{
//     console.log("New file ")
//     console.log(chunk)

//     writeStream.write("\n###New file \n####")
//     writeStream.write(chunk)
// })

//piping

readStream.pipe(writeStream)









































const {books, author} = require('./user')
console.log(books , author)




// Reading File 
fs.readFile('note.txt' , (err , data) =>{
    if(err){
       console.log(err)
        }else{
       console.log(data.toString())
     }
})

// Reading a file in a  folder 
fs.readFile('./Yusuf/note.txt' , (err , data) =>{
    if(err){
       console.log(err)
        }else{
            console.log(data.toString())
        }
})




//  use .writeFile to change the file text 

fs.writeFile('./Yusuf/note.txt', 'Welcome Aniki Yusuf' , (err,data) =>{
     if(err){
        console.log(err)
     }else{
        console.log("New name added")
     }
})


// use .appendFile to add new text or message 
// mind you, the new line or message you are adding will be on the same linbe withj the old one so 
// we will add this method to the back of our text  '\r\n' to make a new line of message 

fs.appendFile('./Yusuf/note.txt' , 'Welkomme Herr Aniki Yusuf\r\n', (err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log("New line has been added to the file ")
    }
})


// Let crate a new folder
fs.mkdir('new folder' , (err,data)  => {
       if(err){
        console.log(err)
       }else{
        console.log("New folder has been added")
       }
})



// creating a new folder with another method
if(!fs.existsSync('New folder')){
fs.mkdir('new folder' , (err,data)  => {
       if(err){
        console.log(err)
       }else{
        console.log("New folder")
       }
})
}else {
    console.log("Folder already exist")
}

// Deleting folder

if(fs.existsSync('New folder')){
    fs.rmdir('new folder' , (err,data)  => {
           if(err){
            console.log(err)
           }else{
            console.log("Folder already deleted")
           }
    })
    }else {
        console.log("Folder Deleted")
    }


    // deleting file 
    // using the .unlink

    if(fs.existsSync('./Yusuf/note.txt')){
        fs.unlink('./Yusuf/note.txt' , (err,data)  => {
               if(err){
                console.log(err)
               }else{
                console.log("File already deleted")
               }
        })
        }else {
            console.log("File Deleted")
        }
    
        if(fs.existsSync('Yusuf')){
        fs.rmdir('Yusuf' , (err,data)  => {
               if(err){
                console.log(err)
               }else{
                console.log("Folder already deleted")
               }
        })
        }else {
            console.log("Folder Deleted")
        }
    
    
    



