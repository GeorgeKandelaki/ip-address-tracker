import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import GeolocationHeader from "./components/GeolocationHeader";
import Map from "./components/Map";
import { useEffect, useMemo, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getLocation } from "./services/apiGeolocation";

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
`;

function isEmpty(obj) {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) return false;
    }

    return true;
}

function App() {
    const [position, setPosition] = useState(() =>
        localStorage.getItem("position") && localStorage.getItem("position").length
            ? JSON.parse(localStorage.getItem("position"))
            : [51.505, -0.09]
    );
    const [location, setLocation] = useState(() => {
        const stored = localStorage.getItem("location");
        return stored ? JSON.parse(stored) : {};
    });
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function onSearch(e) {
        e.preventDefault();

        const regExp = /[a-zA-Z]/g;
        if (regExp.test(search)) return toast.error("Please write an IP Address!");

        setIsLoading(true);
        try {
            const data = await getLocation(search);

            const pos = [data.location.lat, data.location.lng];
            const parsed = {
                ip: data.ip,
                isp: data.isp,
                value: location.timezone ? `UTC${location.timezone}` : "____",
                location: `${data.location.city}, ${data.location.country} ${data.location.postalCode}`,
            };

            setPosition(pos);
            setLocation(parsed);
            setIsLoading(false);

            localStorage.setItem("position", JSON.stringify(pos));
            localStorage.setItem("location", JSON.stringify(parsed));
        } catch (err) {
            console.error(err);
            toast.error("Couldn't find a location with that IP!");
            setPosition([51.505, -0.09]);
        } finally {
            setIsLoading(false);
        }
    }

    const info = useMemo(
        () => [
            {
                key: "ip address",
                value: location.ip || "____",
            },
            {
                key: "location",
                value: location.location || "____",
            },
            {
                key: "timezone",
                value: "UTC" + location.timezone || "____",
            },
            {
                key: "ISP",
                value: location.isp || "____",
            },
        ],
        [location.location, location.isp, location.timezone, location.ip]
    );

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <GlobalStyles />
            <StyledApp>
                <GeolocationHeader
                    search={search}
                    onChangeSearch={setSearch}
                    info={info}
                    onSearch={onSearch}
                    isLoading={isLoading}
                />
                <Map position={position} />
            </StyledApp>
            <></>
        </>
    );
}

export default App;
