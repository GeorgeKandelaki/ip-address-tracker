import styled from "styled-components";

import bgPattern from "../assets/pattern-bg-desktop.png";
import bgPatternMobile from "../assets/pattern-bg-mobile.png";
import Search from "../ui/Search";
import LocationInfo from "./LocationInfo";

const StyledGeolocationHeader = styled.div`
    position: relative;
    background: url(${bgPattern});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 30rem;
    padding-top: 4.8rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    @media screen and( max-width:50em) {
        background: url(${bgPatternMobile});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`;

const Heading = styled.h1`
    color: #fff;
`;

function GeolocationHeader({ search, onChangeSearch, info, onSearch, isLoading }) {
    return (
        <StyledGeolocationHeader>
            <Heading>IP Address Tracker</Heading>
            <Search search={search} onChangeSearch={onChangeSearch} onSearch={onSearch} />
            <LocationInfo info={info} isLoading={isLoading} />
        </StyledGeolocationHeader>
    );
}

export default GeolocationHeader;
