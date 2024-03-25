var mrng = require("mrng");
var links = require("./assets/links");

const dads_jokes = {

  // 1
  async icanhazdadjoke() {
    try {
      const response = await fetch(links.icanhazdadjoke, {
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Joke not found");
        } else {
          throw new Error("Network error");
        }
      }

      const data = await response.json();
      return data.joke;
    } catch (error) {
      return error.message;
    }
  },
};




module.exports = dads_jokes;
