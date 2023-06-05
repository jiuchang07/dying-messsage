// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8_RvYkGgW0LwDqHltsa2Xqdl7jocXsiw",
  authDomain: "dying-message-ts.firebaseapp.com",
  projectId: "dying-message-ts",
  storageBucket: "dying-message-ts.appspot.com",
  messagingSenderId: "430457377372",
  appId: "1:430457377372:web:2858b8454fe338026c0c99",
  databaseURL: "https://dying-message-ts.firebaseio.com",
  measurementId: "G-08DS8RB2G5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
// app.use(cors());
// app.use(express.json());
// app.use(express.static(__dirname + '/frontend' ));
// // app.engine('.html', require('ejs').__express);
// app.set('view engine', 'ejs')
// // app.use(express.static(__dirname + '/messages' ));
// // app.use(express.static(__dirname + '/backend' ));
// // app.use(express.static('c:/Jiu Chang/dying-message-ts/node_modules' ));
// // app.use(express.static(__dirname + '/frontend/Autowuzzler_files' ));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/frontend/htmls/index.html");
// });
// app.get("/create", (req, res) => {
//     // const client = new Client('ws://localhost:2567');
//     // res.send(client.auth)
//     res.sendFile(__dirname + "/frontend/htmls/create.html");
// });
// app.get("/join", (req, res) => {
//     res.sendFile(__dirname + "/frontend/htmls/join.html");
// });
// app.get("/play/:Id", (req, res) => {
//     // console.log('room id = ' + req.params.Id);
//     // app.use(req.params.Id);
//     res.render(__dirname + "/frontend/htmls/play", { paramsId : req.params.Id.toString() });
//     // const hdrs = "<script>const roomid = req.params.roomid;</script>";
//     // const hdrs = '<link rel="stylesheet" href="../play_files/__layout.svelte-c8d5603a.css" />';
//     // res.sendFile(__dirname + "/frontend/htmls/play.html", {Headers: hdrs});
//     // res.sendFile(__dirname + "/frontend/htmls/play.html");
// });
// /**
//  * Bind @colyseus/monitor
//  * It is recommended to protect this route with a password.
//  * Read more: https://docs.colyseus.io/tools/monitor/
//  */
// app.use("/colyseus", monitor());

// import { DyingMessageRoom } from "./backend/rooms/DyingMessageRoom";
// import { WaitingRoom } from "./backend/rooms/WaitingRoom";
// import { LobbyRoom } from "colyseus";
// import { Client } from "colyseus.js";

// export default Arena({
//     getId: () => "Your Colyseus App",

//     initializeGameServer: (gameServer) => {
//         /**
//          * Define your room handlers:
//          */
//         // gameServer
//             // .define("wait", WaitingRoom, {host:true});
//         gameServer
//             .define('dying_message', DyingMessageRoom) // initiated in test/MyRoom_test.ts
//             .enableRealtimeListing();

//     },

//     initializeExpress: (app) => {
//         /**
//          * Bind your custom express routes here:
//          */
//         app.use(cors());
//         app.use(express.json());
//         app.use(express.static(__dirname + '/frontend' ));
//         // app.engine('.html', require('ejs').__express);
//         app.set('view engine', 'ejs')
//         // app.use(express.static(__dirname + '/messages' ));
//         // app.use(express.static(__dirname + '/backend' ));
//         // app.use(express.static('c:/Jiu Chang/dying-message-ts/node_modules' ));
//         // app.use(express.static(__dirname + '/frontend/Autowuzzler_files' ));

//         app.get("/", (req, res) => {
//             res.sendFile(__dirname + "/frontend/htmls/index.html");
//         });
//         app.get("/create", (req, res) => {
//             // const client = new Client('ws://localhost:2567');
//             // res.send(client.auth)
//             res.sendFile(__dirname + "/frontend/htmls/create.html");
//         });
//         app.get("/join", (req, res) => {
//             res.sendFile(__dirname + "/frontend/htmls/join.html");
//         });
//         app.get("/play/:Id", (req, res) => {
//             // console.log('room id = ' + req.params.Id);
//             // app.use(req.params.Id);
//             res.render(__dirname + "/frontend/htmls/play", { paramsId : req.params.Id.toString() });
//             // const hdrs = "<script>const roomid = req.params.roomid;</script>";
//             // const hdrs = '<link rel="stylesheet" href="../play_files/__layout.svelte-c8d5603a.css" />';
//             // res.sendFile(__dirname + "/frontend/htmls/play.html", {Headers: hdrs});
//             // res.sendFile(__dirname + "/frontend/htmls/play.html");
//         });
//         /**
//          * Bind @colyseus/monitor
//          * It is recommended to protect this route with a password.
//          * Read more: https://docs.colyseus.io/tools/monitor/
//          */
//         app.use("/colyseus", monitor());
//     },


//     beforeListen: () => {
//         /**
//          * Before before gameServer.listen() is called.
//          */
//     }
// });