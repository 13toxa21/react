export default class CoffeeService {
  getBestsellers() {
    return fetch("http://localhost:3001/bestsellers")
      .then((responce) => responce.json())
      .then((responce) => console.log(responce));
  }
}
