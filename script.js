const list =document.querySelector('#book-list ul')

//Delete book
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

//Add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    //Create Elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');


    //Add Content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //Add Classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete')


    //Append to Document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);


    //Hide Books
    const hideBox = document.querySelector('hide');
    hideBox.addEventListener('change',function(e){


     //Filter Books
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup',function(e){
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName('li');
        Array.from(books).forEach(function(book){
            const title =book.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(term)!=-1){
                book.style.display = 'block';
            }

            else{
                book.style.display = 'none';
            }
        })
    })

    })

   
})
