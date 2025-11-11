import fetch from "node-fetch";

async function hitWebPage() {
  try {
    const response = await fetch("https://onebyte-app-server.onrender.com/");
    console.log("Status:", response.status);
  } catch (error) {
    console.error("Error hitting webpage:", error);
  }
}

hitWebPage();
