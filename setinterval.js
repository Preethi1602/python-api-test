import fetch from "node-fetch";

// for (let i = 0; i < 200; i++) {
//   apiCall();
// }

function apiCall() {
  fetch("https://a3ixkxbvx3.us-east-1.awsapprunner.com").then((response1) => {
    console.log(response1);
  });

  fetch("https://3ahdxshkap.us-east-1.awsapprunner.com").then((response) => {
    console.log(response);
  });
}

setInterval(apiCall, 500);
