import styled from "styled-components";

import bgPattern from "../assets/pattern-bg-desktop.png";
import Search from "../ui/Search";
import LocationInfo from "./LocationInfo";

const StyledGeolocationHeader = styled.div`
    background: url(${bgPattern});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 35rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
`;

const Heading = styled.h1`
    color: #fff;
`;

function GeolocationHeader({ search, onChangeSearch }) {
    return (
        <StyledGeolocationHeader>
            <Heading>IP Address Tracker</Heading>
            <Search search={search} onChangeSearch={onChangeSearch} />
            <LocationInfo />
        </StyledGeolocationHeader>
    );
}

export default GeolocationHeader;
