
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// costomize your version
yargs.version('1.1.0')

//create add comand
yargs.command({
    command: 'add',
    describe:'Add a new note',
    builder:{
       title:{
        describe: 'Note title',
        demandOption:true,
        type:'string'
       },
       body: {
       describe:'Note body',
       demandOption: true,
       type:'string'
       }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe:'remove a note',
    builder: {
        title:{
          describe:'Note title',
          demandOption: true,
          type:'string'
        },
    },
    handler(argv){
       notes.removeNotes(argv.title)
    }
})

//create read command
yargs.command({
    command: 'read',
    describe:'read a note',
    builder: {
     title: {
     describe: "Note title",
    demandOption: true,
    type: 'string'
     }
    },
    handler(argv){
      notes.readNote(argv.title)
    }
})

// list 
yargs.command({
    command: 'list',
    describe:'listing your note',
    handler(){
       notes.listNotes()
    }
})

yargs.parse()


// add,remove.read,list
//console.log(yargs.argv)

