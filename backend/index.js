const express = require("express");
const cors = require("cors");
const {default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
        //last_name: username,
      },
      { headers: { "private-Key": "a75a9617-0096-4a4e-b68b-12bb8ddb4c4a" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response && e.response.status) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

app.listen(3001);
