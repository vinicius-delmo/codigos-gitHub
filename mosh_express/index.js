const express = require("express");
const app = express();
const Joi = require("joi");

app.use(express.json());

const genres = [
  { id: 1, genre: "comedy" },
  { id: 2, genre: "action" },
  { id: 3, genre: "drama" },
];

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

app.post("/api/genres", (req, res) => {
  const { error } = validategenre(req.body);
  if (error)
    //400 Bad Request
    return res.status(400).send(error.details[0].message);
  const genre = {
    id: genres.length + 1,
    genre: req.body.genre,
  };
  genres.push(genre);
  res.send(genre);
});
app.put("/api/genres/:id", (req, res) => {
  //
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given id was nos found");

  const { error } = validategenre(req.body);
  if (error)
    //400 Bad Request
    return res.status(400).send(error.details[0].message);

  genre.genre = req.body.genre;
  res.send(genre);
});

function validategenre(genre) {
  const schema = {
    genre: Joi.string().min(3).required(),
  };

  return Joi.validate(genre, schema);
}

app.delete("/api/genres/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given id was nos found");
  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send(genre);
});

app.get("/api/genres/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given id was nos found");
  res.send(genre);
});

app.listen(3001, () => {
  console.log("Aplicação rodando na porta 3001");
});
