// const router = require("express").Router();
// const {
//   createUser,
//   getUsers,
//   auth,
//   getUserById,
// } = require("./user.controller");

// router.post("/", createUser);
// router.get("/all", getUsers);
// router.get("/", function (req, res) {
//   res.send("Hello, World!");
// });

// router.get("/", auth, getUserById);
// router.post("/login", login);

// module.exports = router;

const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  createUser,
  getUsers,
  getUserById,
  login,
} = require("./user.controller");

router.post("/", createUser);
router.get("/all", getUsers);
router.get("/", auth, getUserById);
router.post("/login", login);

module.exports = router;
