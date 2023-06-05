import * as functions from "firebase-functions";
import * as express from 'express';


// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = express();

// app.use(express.static(__dirname + '/frontend' ));
// // app.engine('.html', require('ejs').__express);
// app.set('view engine', 'ejs')
// app.use(express.static(__dirname + '/messages' ));
// app.use(express.static(__dirname + '/backend' ));
// app.use(express.static('c:/Jiu Chang/dying-message-ts/node_modules' ));
// app.use(express.static(__dirname + '/frontend/Autowuzzler_files' ));

app.get("/home", (req, res) => {
    // res.sendFile(__dirname + "/frontend/htmls/index.html");
    res.send("Hello from Firebase!")
  });
app.get("/join", (req, res) => {
    // res.sendFile(__dirname + "/frontend/htmls/join.html");
    res.send("join page")
  });
// app.get("/play/:Id", (req, res) => {
//     // console.log('room id = ' + req.params.Id);
//     // app.use(req.params.Id);
//     res.render(__dirname + "/frontend/htmls/play", { paramsId : req.params.Id.toString() });
//     // const hdrs = "<script>const roomid = req.params.roomid;</script>";
//     // const hdrs = '<link rel="stylesheet" href="../play_files/__layout.svelte-c8d5603a.css" />';
//     // res.sendFile(__dirname + "/frontend/htmls/play.html", {Headers: hdrs});
//     // res.sendFile(__dirname + "/frontend/htmls/play.html");
// });

exports.app = functions.https.onRequest(app);