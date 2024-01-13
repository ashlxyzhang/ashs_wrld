import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Phonebook from "./Phonebook";
import Phone from "./Phone";
import Login from "./Login";
let token = "";
const setToken = (newToken) => {
    token = `Bearer ${newToken}`;
};
const Tracks = () => {
    const [tracks, setTracks] = useState(null);
    async function fetchWebAPI(endpoint, method) {
        try {
            const res = await fetch(`https://api.spotify.com/${endpoint}`, {
                headers: {
                    Authorization: token,
                },
                method,
            });
            return res.json();
        }
        catch (error) { }
    }
    async function fetchTracks() {
        const res = await fetchWebAPI("v1/me/top/tracks?time_range=short_term&limit=30", "GET");
        setTracks(res.items);
    }
    return (_jsxs(_Fragment, { children: [_jsx(Phone, { image: "/Phonebook/rotary_phone.webp", tracks: tracks }), _jsx(Login, {}), tracks === null && (_jsx("div", { className: "container d-flex justify-content-center align-items-center", children: _jsx("button", { className: "btn", style: {
                        marginTop: 20,
                        backgroundColor: "#feebff",
                        color: "grey",
                    }, onClick: () => fetchTracks(), children: "Fetch Tracks" }) })), tracks !== null && _jsx(Phonebook, { tracks: tracks })] }));
};
export default { Tracks, setToken };
