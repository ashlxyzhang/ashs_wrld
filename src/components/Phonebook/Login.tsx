import GetToken from "./GetToken.js";
import controller from "./GetTracks.tsx";

function Login() {
  const id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const redir = "http://localhost:5173/auth/callback";
  const scope = "user-top-read";
  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${id}&redirect_uri=${redir}&scope=${scope}&response_type=code`;

  const loginBtn = (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ marginTop: 20 }}
    >
      <a
        href={spotifyAuthUrl}
        className="btn"
        style={{ backgroundColor: "#fce6f8", color: "grey" }}
      >
        Login with Spotify
      </a>
    </div>
  );

  const token = GetToken(id, secret, redir);
  controller.setToken(token);

  return <>{token === "" ? loginBtn : null}</>;
}

export default Login;
