import Arena from "@colyseus/arena";
import { monitor } from "@colyseus/monitor";
import express from 'express';
import path from 'path';
import serveStatic from 'serve-static';
import { Router } from "express";
import cors from "cors";
import {Server} from "colyseus";



/**
 * Import your Room files
 */
import { DyingMessageRoom } from "./backend/rooms/DyingMessageRoom";
import { WaitingRoom } from "./backend/rooms/WaitingRoom";
import { LobbyRoom } from "colyseus";
import { Client } from "colyseus.js";

export default Arena({
    getId: () => "Your Colyseus App",

    initializeGameServer: (gameServer) => {
        /**
         * Define your room handlers:
         */
        // gameServer
            // .define("wait", WaitingRoom, {host:true});
        gameServer
            .define('dying_message', DyingMessageRoom) // initiated in test/MyRoom_test.ts
            .enableRealtimeListing();

    },

    initializeExpress: (app) => {
        /**
         * Bind your custom express routes here:
         */
        app.use(cors());
        app.use(express.json());
        app.use(express.static(__dirname + '/frontend' ));
        // app.engine('.html', require('ejs').__express);
        app.set('view engine', 'ejs')
        // app.use(express.static(__dirname + '/messages' ));
        // app.use(express.static(__dirname + '/backend' ));
        // app.use(express.static('c:/Jiu Chang/dying-message-ts/node_modules' ));
        // app.use(express.static(__dirname + '/frontend/Autowuzzler_files' ));

        app.get("/", (req, res) => {
            res.sendFile(__dirname + "/frontend/htmls/index.html");
        });
        app.get("/create", (req, res) => {
            // const client = new Client('ws://localhost:2567');
            // res.send(client.auth)
            res.sendFile(__dirname + "/frontend/htmls/create.html");
        });
        app.get("/join", (req, res) => {
            res.sendFile(__dirname + "/frontend/htmls/join.html");
        });
        app.get("/play/:Id", (req, res) => {
            // console.log('room id = ' + req.params.Id);
            // app.use(req.params.Id);
            res.render(__dirname + "/frontend/htmls/play", { paramsId : req.params.Id.toString() });
            // const hdrs = "<script>const roomid = req.params.roomid;</script>";
            // const hdrs = '<link rel="stylesheet" href="../play_files/__layout.svelte-c8d5603a.css" />';
            // res.sendFile(__dirname + "/frontend/htmls/play.html", {Headers: hdrs});
            // res.sendFile(__dirname + "/frontend/htmls/play.html");
        });
        /**
         * Bind @colyseus/monitor
         * It is recommended to protect this route with a password.
         * Read more: https://docs.colyseus.io/tools/monitor/
         */
        app.use("/colyseus", monitor());
    },


    beforeListen: () => {
        /**
         * Before before gameServer.listen() is called.
         */
    }
});