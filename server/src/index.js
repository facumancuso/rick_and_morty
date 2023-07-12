const server = require('./app');
const PORT = 3001;
const {conn} = require ('./DB_connection');

conn.sync({force:true});

server.listen(PORT, ()=>{console.log('Server up in port: ' + PORT);});


//! CON EXPRESS
// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

// server.use(express.json());
// server.use("/rickandmorty", router);

// server.listen(PORT, () => {
//   console.log(`Server on port ${PORT}`);
// });



//! SIN EXPRESS
// const http = require("http");
// const getCharById = require("./controllers/getCharById");
// const PORT = 3001;

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const { url } = req;
//     if (url.includes("/rickandmorty/character")) {
//       const id = Number(url.split("/").pop());
//       getCharById(res, id);
//     } else {
//       res.writeHead(403, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "Route not found" }));
//     }
//   })
//   .listen(PORT, "localhost", null, () => {
//     console.log(`Listening on port: ${PORT}`);
//   });