const express = require('express');
const app = express();
const path = require("path");
const PORT = 8000;

app.use(express.static(path.join(__dirname,"my-app","build")))

app.listen(PORT,()=>{
     console.log(`Server listening on port ${PORT}`);
})