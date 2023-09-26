const express = require("express");
const {createProxyMiddleware} = require("http-proxy-middleware");

const app = express();

app.use("/characters", createProxyMiddleware({
	target:"http://characters:8001",
	changeOrigin:true
}));
app.use("/films", createProxyMiddleware({
	target:"http://films:8002",
	changeOrigin:true
}));
app.use("/planets", createProxyMiddleware({
	target:"http://planets:8003",
	changeOrigin:true
}));
app.use("/database", createProxyMiddleware({
	target:"http://database:8004",
	changeOrigin:true
}));

app.listen(8000)