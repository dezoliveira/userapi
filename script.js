let button = document.getElementById('button')
let outputTable = document.getElementById('outputTable')
let title = document.getElementById('title')
let tableTitle = document.getElementById('tableTitle')

button.addEventListener('click', showUsers)

function showUsers(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then(data => {
      mountTable(data)
      console.log(data)
    })
}

function mountTable(data){
  title.style.display = "none"
  tableTitle.style.display = "block"

  const th = `  
  <tr class="has-background-primary">
    <th>ID</th>
    <th>Nome</th>
    <th>Usuario</th>
    <th>Website</th>
  </tr>        
  `

  let html = ''
  
  for (let i=0; i < data.length; i++){
  html += `
    <tr>
      <td>${data[i].id}</td>
      <td>${data[i].name}</td>
      <td>${data[i].username}</td>
      <td>${data[i].website}</td>
    </tr>
  `
  }
  
  outputTable.innerHTML = th + html
}