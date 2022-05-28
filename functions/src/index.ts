import * as functions from "firebase-functions";

/* eslint-disable */
const mainjs = require(__dirname + "/server/main");

exports.ssrApp = functions.https.onRequest(mainjs.app());