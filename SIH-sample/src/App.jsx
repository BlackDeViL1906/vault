import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home";
import EVault from "./pages/eVaultHome";
import CertifHome from "./pages/certific-home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blcvault" element={<EVault />} />
        <Route path="/certif-home" element={<CertifHome />} />
      </Routes>
    </Router>
  );
};

export default App;

// import process from "process";
// import minimist from "minimist";
// import { Web3Storage, getFilesFromPath } from "web3.storage";

// async function main() {
//   const args = minimist(process.argv.slice(2));
//   const token = args.token;

//   if (!token) {
//     return console.error(
//       "A token is needed. You can create one on https://web3.storage"
//     );
//   }

//   if (args._.length < 1) {
//     return console.error("Please supply the path to a file or directory");
//   }

//   const storage = new Web3Storage({ token });
//   const files = [];

//   for (const path of args._) {
//     const pathFiles = await getFilesFromPath(path);
//     files.push(...pathFiles);
//   }

//   console.log(`Uploading ${files.length} files`);
//   const cid = await storage.put(files);
//   console.log("Content added with CID:", cid);
// }

// export default main();
