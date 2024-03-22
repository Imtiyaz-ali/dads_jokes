var mrng= require('mrng');

async function random_facts(){
    var random = mrng(1,1000)
    var komedy = ""
    await fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      komedy = data.value;
    //   console.log(chuckNorrisJoke);
    })
    .catch(error => komedy="Error");

    return `${random}=> ${komedy}`
}

module.exports = random_facts;