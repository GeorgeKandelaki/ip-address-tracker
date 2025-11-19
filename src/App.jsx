import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import GeolocationHeader from "./components/GeolocationHeader";
import Map from "./components/Map";
import { useState } from "react";

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
`;

function App() {
    const [search, setSearch] = useState("");

    return (
        <>
            <GlobalStyles />
            <StyledApp>
                <GeolocationHeader search={search} onChangeSearch={setSearch} />
                <Map />
            </StyledApp>
            <></>
        </>
    );
}

export default App;
