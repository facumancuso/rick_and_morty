//! CON EXPRESS

require('dotenv').config();

const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');

const getCharById = (req, res) => {
  const id = req.params.id; 
  const requestURL = URL + id; 

  axios.get(requestURL)
    .then(response => {
      if (response.data) {
        const character = response.data;
        const { id, status, name, species, origin, image, gender } = character;
        res.json({ id, status, name, species, origin, image, gender });
      } else {
        res.status(404).json({ message: "Not found" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
};

module.exports = getCharById;


// ! SIN EXPRESSS
// const axios = require("axios");

// const getCharById = (res, id) => {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({ data }) => {
//       const { id, name, gender, species, origin, image, status } = data;
//       const character = {
//         id,
//         name,
//         gender,
//         species,
//         origin: origin.name,
//         image,
//         status,
//       };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(error.message);
//     });
// };

// module.exports = getCharById;