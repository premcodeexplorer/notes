const fs = require('fs')
const chalk = require('chalk')


const addNotes = (title,body) => {
const notes = loadNotes()

const duplicateNote = notes.find((note) => note.title === title )

// const duplicateNotes = notes.filter(function (note){
//     return note.title === title
//    })

if(!duplicateNote){
    notes.push({
        title: title,
        body: body
    })
    savedNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
}else{
    console.log(chalk.red.inverse('note title taken'))
}
}

const removeNotes = (title) => {
     const notes =loadNotes()
     const notesToKeep = notes.filter( (note) => note.title !== title)
    //  const notesToKeep = notes.filter(function(note){
    //     return note.title !== title
    //  })

     if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note Removed'))
     savedNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No Note found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    });
} 

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else {
        console.log(chalk.red.inverse('note not found!'))
    }
}

const savedNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
   
    try{
        const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

    }catch(e){
      return []
    } 
}


module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}