import { useEffect, useState } from "react";

function GetAuthCode() {
  const queryParams = new URLSearchParams(window.location.search);

  if (queryParams.has("code")) {
    const authCode = queryParams.get("code");
    return authCode;
  }
  return null;
}

function GetToken(id: string, secret: string, redir: string) {
  const [token, setToken] = useState("");
  const authCode = GetAuthCode();

  useEffect(() => {
    async function fetchData() {
      if (authCode) {
        const data = new URLSearchParams();
        data.append("grant_type", "authorization_code");
        data.append("code", authCode);
        data.append("redirect_uri", redir);

        const authHeader = {
          Authorization: `Basic ${btoa(`${id}:${secret}`)}`,
          "Content-Type": "application/x-www-form-urlencoded",
        };

        fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: authHeader,
          body: data,
        })
          .then((response) => {
            if (!response.ok) throw new Error("Access token not obtained");
            else return response.json();
          })
          .then((data) => {
            setToken(data.access_token);
          })
          .catch((error) => {
            console.error("Error changing auth code for access token:", error);
          });
      }
    }

    fetchData();
  }, []);

  return token;
}

export default GetToken;
