import express from "express";
const router = express.Router();
import Joi from "joi";

const genres = [
  { id: 1, genre: "comedy" },
  { id: 2, genre: "action" },
  { id: 3, genre: "drama" },
];

router.get("/", (req, res) => {
  res.send(genres);
});

router.post("/", (req, res) => {
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
router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given id was nos found");
  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send(genre);
});

router.get("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given id was nos found");
  res.send(genre);
});

export default router;
