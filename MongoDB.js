import axios from "axios";
const urlEndpoint =
  "https://eu-central-1.aws.data.mongodb-api.com/app/data-qooso/endpoint";

function getConfig(doc) {
  return {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key":
        "UHPQ0WPPMdoD5C0X9GksWWhguVHioddBiuRysQ5JGWq7XxFahMvZDHKPQ419araT", //apiKey
    },
    params: {
      dataSource: "Scoala", //clusterName
      database: "Scoala", //databaseName
      collection: "User", //collectionName
      document: doc, // make sure document is inside quotes
    },
  };
}

async function insertFeedback(doc) {
  let apicall = await axios.post(urlEndpoint + "/user", getConfig(doc));
  console.log(apicall);
  return apicall.data;
}

export { insertFeedback };
