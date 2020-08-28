console.log('destructuring');

const book = {
    title : 'Ego is the enemy',
    author : 'Ryan Holiday',
    publisher : {
        //name : 'Penguin'
    }
};

const { title , author  } = book;
const {name : publishername = 'Self-published' } = book.publisher;
console.log(publishername);