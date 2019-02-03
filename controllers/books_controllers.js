let books = [];
let id = 0;


module.exports = {
    read: (req, res) => {
        res.status(200).send( books );
    },
    create: (req, res) => {
        let {title, author} = req.body;

        let book = {
            id: id,
            title,
            author,
        }
        books.push(book);
        id++;
        res.status(200).send( books );
    },
    update: (req,res) => {
        const update = req.body;
        const id = req.params.id;

        const oldBookIndex = books.findIndex(b => b.id == id);

        if(oldBookIndex === -1){
            return res.status(404).send('No book with book id' + id + 'could be found.')
        };
        
        books[oldBookIndex] = {
            ...books[oldBookIndex],
            ...update,
        };
        res.status(200).send(books);
    },
    delete: (req, res) => {
        const id = req.params.id;

        const deleteBookIndex = books.findIndex(b => b.id == id);

        if(deleteBookIndex === -1){
            return res.status(404).send('No book with book id' + id + 'could be found.')
        };
        
        books.splice(deleteBookIndex, 1 );
        res.status(200).send(books);

    },
    
    
}