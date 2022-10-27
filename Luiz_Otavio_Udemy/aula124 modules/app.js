
//  const response = fetch('https://jsonplaceholder.typicode.com/posts')
//  .then(res => res.json())
//  .then(resposta => console.log(resposta))
//  .catch(e =>console.log('error proposital'))

(async function () {
   const result = document.getElementById('return-dados')
   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
      const jsonData = await response.json()
      console.log(jsonData)

        for (var item in jsonData){
           result.innerHTML += 
           `
           <table>
              <tr>
              <td>${jsonData[item].title}</td>
              </tr>
           </table>
           `
        }
   }
   catch(e) {
      console.log('esta com erro')
   }
})()

