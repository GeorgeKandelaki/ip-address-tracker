import styled from "styled-components";

const StyledLocationInfo = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 1000;

    display: flex;
    align-items: top;

    transform: translateY(50%);
    background-color: #fff;
    border-radius: 1.5rem;
    padding: 3.2rem 0;

    @media screen and (max-width: 50em) {
        flex-direction: column;
        transform: translateY(75%);
    }

    & > div:not(:last-child) {
        border-right: 1px solid var(--color-gray-400);
    }

    & > div {
        padding: 0 3.2rem;
    }
`;

const StyledLocationInfoItem = styled.div`
    text-align: left;
    max-width: 30rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const Label = styled.p`
    text-transform: uppercase;
    color: var(--color-gray-400);
    font-weight: 700;
    font-size: 1.6rem;
    letter-spacing: 1px;
`;

const Value = styled.p`
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 1.2;

    @media screen and (max-width: 55em) {
        font-size: 2.4rem;
    }

    @media screen and (max-width: 50em) {
        font-size: 2rem;
    }
`;

function LocationInfo({ info, isLoading }) {
    return (
        <StyledLocationInfo>
            {info.map((el) => (
                <LocationInfoItem obj={el} key={el.key} isLoading={isLoading} />
            ))}
        </StyledLocationInfo>
    );
}

function LocationInfoItem({ obj, isLoading }) {
    return (
        <StyledLocationInfoItem>
            <Label>{obj.key}</Label>
            <Value>{isLoading ? "___" : obj.value}</Value>
        </StyledLocationInfoItem>
    );
}

export default LocationInfo;
