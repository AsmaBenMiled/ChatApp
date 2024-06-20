const express = require("express");//run the server from any other orgin
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// Chat Engine api project code 

// const CHAT_ENGINE_PROJECT_ID = "f25585d4-039c-4535-bcf5-17ba7d7a72ca";
// const CHAT_ENGINE_PRIVATE_KEY = "41196d63-f0b4-4fb6-9b1f-29b619382ccf";


app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "41196d63-f0b4-4fb6-9b1f-29b619382ccf" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});
// vvv On port 3001!
app.listen(3001);




