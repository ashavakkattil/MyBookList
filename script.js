const bookName = document.getElementById('book')
const month = document.getElementById('month')
const rating = document.getElementById('rating')
const addBtn = document.getElementById('add-btn')
const form = document.querySelector('form')
const bookList = document.querySelector('#book-list')
const search = document.getElementById('search')

bookList.addEventListener('click', deleteBook)
form.addEventListener('submit', addBook)
search.addEventListener('keyup', filterBook)

function addBook() {
    var row = document.createElement('tr')
    row.innerHTML = `<td class="book-name">${bookName.value}</td><td>${month.value}</td><td>${rating.value}</td><td><i class="material-icons teal-text delete">delete</i></td>`
    document.querySelector('#book-list').appendChild(row)
    bookName.value = ''
    month.value = ''
    rating.value = ''

    bookName.blur()
}
function deleteBook(e){
    if(e.target.classList.contains('delete')){
        document.querySelector('#book-list').removeChild(e.target.parentElement.parentElement)
    }
}
function filterBook(e){
    let searchText = e.target.value
    let books = document.querySelectorAll('.book-name')
    books.forEach((b) => {
        if(b.textContent.toLowerCase().indexOf(searchText.toLowerCase()) != -1){
            b.parentElement.style.display = 'table-row'
        }else{
            b.parentElement.style.display = 'none'
        }
    })
}