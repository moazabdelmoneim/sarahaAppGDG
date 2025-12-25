import bootstrap from './src/app.controller.js'
import express from 'express';

const app = express();
const port = 3000;

bootstrap(app, express)

app.listen(port , ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})





//                       app 
// src 
//      app.controller.js   for   /auth
//      modules
//      -------auth
//               auth.controller.js /register          /auth/register
//               servcise 
//               --------auth.service.js
//      ---------user
//              user.controller.js   /profile         /user/profile
//             service
//              -------- user.service.js
//---------------messages
//               message.controller.js   /inbox        /messages/inbox
//               service
//               --------- message.service.js

