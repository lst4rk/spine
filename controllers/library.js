const Book = require('../models/Book');

module.exports = {
    getBooks: async (req,res) => {
        console.log(req.user)
        try{
            const libraryBooks = await Book.find({userID: req.user.id})
            const booksLeft = await Book.countDocuments({userID: req.user.id, read: false})
            res.render('library.ejs', {library: libraryBooks, unread: booksLeft, user: req.user});
        }catch(err){
            console.log(err);
        }
    },
    // addBook: async (req, res) => {
    //     try{
    //         await Book.create({title: req.body.bookTitle, read: false, userId: req.user.id});
    //         res.redirect('/library');
    //     }catch(err){
    //         console.log(err);
    //     }
    // },
    markRead: async (req, res) => {
        try{
            await Book.findOneAndUpdate({_id:req.body.bookIdFromJSFile},{
                read: true
            })
            console.log('Marked Read')
            res.json('Marked Read')
        }catch(err){
            console.log(err)
        }
    },
    markUnread: async (req, res) => {
        try{
            await Book.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                read: false
            })
            console.log('Marked Unread')
            res.json('Marked Unread')
        }catch(err){
            console.log(err)
        }
    },
    deleteBook: async (req, res) => {
        console.log(req.body.bookIdFromJSFile)
        try{
            await Book.findOneAndUpdate({_id:req.body.bookIdFromJSFile})
            console.log('Deleted Book')
            res.json('Deleted Book')
        }catch(err){
            console.log(err)
        }
    }
}