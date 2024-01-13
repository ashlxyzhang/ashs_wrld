import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import GetToken from "./GetToken.js";
import controller from "./Tracks.tsx";
function Login() {
    const id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    const redir = "http://localhost:5173/auth/callback";
    const scope = "user-top-read";
    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${id}&redirect_uri=${redir}&scope=${scope}&response_type=code`;
    const loginBtn = (_jsx("div", { className: "container d-flex justify-content-center align-items-center", style: { marginTop: 20 }, children: _jsx("a", { href: spotifyAuthUrl, className: "btn", style: { backgroundColor: "#feebff", color: "grey" }, children: "Login with Spotify" }) }));
    const token = GetToken(id, secret, redir);
    controller.setToken(token);
    return _jsx(_Fragment, { children: token === "" ? loginBtn : null });
}
export default Login;
