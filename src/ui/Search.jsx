import styled from "styled-components";
import iconSearch from "../assets/icon-arrow.svg";

const Form = styled.form`
    position: relative;
`;
const Input = styled.input`
    padding: 1.6rem 6.5rem 1.6rem 2rem;
    border-radius: 1.5rem;
    border: none;
    width: 50rem;
    outline: none;
`;
const Button = styled.button`
    position: absolute;
    height: 100%;
    transform: translateX(-100%);
    border-radius: 0 1.5rem 1.5rem 0;
    width: 5rem;
    border: none;
    background-color: var(--color-gray-950);
    transition: background-color 0.3s;

    & img {
        transform: translateY(3%);
    }

    &:hover {
        background-color: var(--color-gray-400);
    }
`;

function Search({ search, onChangeSearch, handleSubmit }) {
    return (
        <Form onSubmit={handleSubmit}>
            <Input
                value={search}
                onChange={(e) => onChangeSearch(e.target.value)}
                placeholder="Search for any IP address or domain"
            />

            <Button>
                <img src={iconSearch} alt="search icon" />
            </Button>
        </Form>
    );
}

export default Search;
