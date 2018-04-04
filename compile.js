'use strict';

const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFile.Sync(inboxPath, 'utf8');

console.log(solc.compile(source, 1));
