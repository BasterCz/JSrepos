#!/usr/bin/env node
const { build } = require("estrella")
const pkg = require("./package.json")
build({
  entry: "index.ts",
  outfile: "distro/index.ts",
  bundle: true,
  platform: "node"
})