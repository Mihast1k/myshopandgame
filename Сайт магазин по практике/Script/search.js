let data = [
    {
      "name": "John he",
      "age": 30,
      "city": "New York"
    },
    {
      "name": "Alex hello",
      "age": 20,
      "city": "USA"
    },
    {
      "name": "Nina",
      "age": 20,
      "city": "Italyhe"
    }  
  ];
  
  let searchParam = "He";
  
  /*let users = data.filter(item => item.age == 20);*/
  /*let users = data.filter(item => item.name.toLowerCase() == searchParam.toLowerCase());*/
  let users = data.filter(function(item) {
    let searchStr = item.name.toLowerCase(); 
    return searchStr.includes(searchParam.toLowerCase());
  });
  
  let content = document.querySelector(".content");
  
  for (let user of users) {
    content.innerHTML += `
      <p>${user.name}</p>
      <p>${user.age}</p>
      <p>${user.city}</p>
    `;  
  }