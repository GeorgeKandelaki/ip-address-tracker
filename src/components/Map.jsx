import { MapContainer, Marker, TileLayer } from "react-leaflet";
import styled from "styled-components";

const StyledMap = styled.div`
    width: 100%;
    height: 60rem;
`;

function Map({ position }) {
    return (
        <MapContainer
            key={position[0].toString()}
            center={position}
            zoom={17}
            scrollWheelZoom={true}
            style={{ height: "calc(100vh - 30rem)" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>{/* <Popup>LoL, I suppose I don't need this.</Popup> */}</Marker>
        </MapContainer>
    );
}

export default Map;
