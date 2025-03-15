// File System (fs) with promises API
import { readFile } from 'fs/promises';

async function readFileExample() {
  try {
    const data = await readFile('file.txt', 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

// URL module (modern approach)
import { URL } from 'url';

function urlExample() {
  const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
  const myURL = new URL(adr);
  
  console.info('Host:', myURL.host);
  console.info('Pathname:', myURL.pathname);
  console.info('Query params:', Object.fromEntries(myURL.searchParams));
  console.info('Search string:', myURL.search);
}

// OS module
import os from 'os';

function osExample() {
  console.info('Platform:', os.platform());
  console.info('Home directory:', os.homedir());
  console.info('Hostname:', os.hostname());
  console.table(os.cpus());
  
  // Additional useful OS information
  console.info('Total memory (GB):', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2));
  console.info('Free memory (GB):', (os.freemem() / 1024 / 1024 / 1024).toFixed(2));
  console.info('Uptime (hours):', (os.uptime() / 60 / 60).toFixed(2));
}

// Path module
import path from 'path';

function pathExample() {
  const filePath = 'c:/nodejs/02-modul/file.txt';
  console.info('Basename:', path.basename(filePath));
  console.info('Directory name:', path.dirname(filePath));
  console.info('File extension:', path.extname(filePath));
  console.info('Parsed base:', path.parse(filePath).base);
  
  // Additional path operations
  console.info('Normalized path:', path.normalize('c:/nodejs//02-modul/../file.txt'));
  console.info('Joined path:', path.join('/nodejs', 'modules', 'example', 'file.txt'));
  console.info('Absolute path:', path.resolve('file.txt'));
}

// QueryString module (both modern and legacy approaches)
import querystring from 'querystring';
import { URLSearchParams } from 'url';

function querystringExample() {
  // Legacy querystring approach
  let obj = {
    name: "Pojok Code",
    age: 20,
    year: 2017
  };
  
  // Add additional properties
  obj.location = "Jakarta";
  obj.isActive = true;
  
  const qrLegacy = querystring.stringify(obj);
  console.log('Legacy querystring result:', qrLegacy);
  
  // Modern URLSearchParams approach (recommended)
  const params = new URLSearchParams();
  Object.entries(obj).forEach(([key, value]) => {
    params.append(key, value);
  });
  
  console.log('Modern URLSearchParams result:', params.toString());
  
  // Parsing query strings
  const parsedLegacy = querystring.parse(qrLegacy);
  console.log('Parsed legacy querystring:', parsedLegacy);
  
  // Parse using URLSearchParams
  const parsedModern = Object.fromEntries(new URLSearchParams(params.toString()));
  console.log('Parsed modern querystring:', parsedModern);
}

// Execute all examples
async function main() {
  console.log('--- File System Example ---');
  await readFileExample();
  
  console.log('\n--- URL Example ---');
  urlExample();
  
  console.log('\n--- OS Example ---');
  osExample();
  
  console.log('\n--- Path Example ---');
  pathExample();
  
  console.log('\n--- QueryString Example ---');
  querystringExample();
}

main().catch(console.error);