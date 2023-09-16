// import React, { useState, useEffect } from "react";
// import CustomNavbar from "../components/navbar";
// import { Web3Storage } from "web3.storage";
// import CardComp from "../components/card";
// import "../assets/css/view-cert.css";

// const API_TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk0MzU1NDQ3M0Q3MDdkMDIxRDNEZTdhNGY3NDgzNzFENjhCNGEyNEMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTQ2OTQyMTkzMTAsIm5hbWUiOiJuZnRfdmVyaWZ5In0.iC7sd6RofUeMKRw-UEtNGt56aCu0deyzrGxVQH3wGi0";

// const ViewCertif = () => {
//   const [loading, setLoading] = useState(true);
//   const [files, setFiles] = useState([]);

//   // Function to list uploads using web3.storage
//   const listUploads = async () => {
//     try {
//       const token = getAccessToken(); // Get your access token
//       const client = new Web3Storage({ token }); // Create a Web3Storage client

//       const uploads = await client.list(); // List uploads

//       // Log the details of each upload
//       for await (const upload of uploads) {
//         console.log({ upload });
//         // console.log(`File Name: ${upload.name}`);
//         // console.log(`CID: ${upload.cid}`);
//         // console.log(`Size: ${upload.dagSize}`);
//       }
//     } catch (error) {
//       console.error("Error listing uploads:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getAccessToken = () => {
//     return API_TOKEN;
//   };

//   useEffect(() => {
//     listUploads();
//   }, []);

//   return (
//     <div className="view-cert-container">
//       <CustomNavbar />
//       <div>
//         <h1
//           style={{
//             color: "white",
//             fontSize: "60px",
//             marginLeft: "40%",
//             marginTop: "2%",
//           }}
//         >
//           View Files
//         </h1>
//         {loading ? (
//           <p>Loading files...</p>
//         ) : (
//           <div>
//             {files.map((file) => (
//               <CardComp key={file.cid} file={file} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewCertif;

import React, { useState, useEffect } from "react";
import CustomNavbar from "../components/navbar";
import CardComp from "../components/card";
import { Web3Storage } from "web3.storage";
import "../assets/css/view-cert.css";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk0MzU1NDQ3M0Q3MDdkMDIxRDNEZTdhNGY3NDgzNzFENjhCNGEyNEMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTQ2OTQyMTkzMTAsIm5hbWUiOiJuZnRfdmVyaWZ5In0.iC7sd6RofUeMKRw-UEtNGt56aCu0deyzrGxVQH3wGi0";

const ViewCertif = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function listUploads() {
      const client = new Web3Storage({ token: API_TOKEN });
      const uploads = [];
      for await (const upload of client.list()) {
        uploads.push(upload);
      }
      setFiles(uploads);
      setLoading(false);
    }

    listUploads();
  }, []);

  return (
    <div className="view-cert-container">
      <CustomNavbar />
      <div>
        <h1
          style={{
            color: "white",
            fontSize: "60px",
            marginLeft: "40%",
            marginTop: "2%",
            marginBottom: "2%",
          }}
        >
          View Files
        </h1>
        {loading ? (
          <p>Loading files...</p>
        ) : (
          <div>
            {files.map((file) => (
              <CardComp key={file.cid} file={file} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCertif;
