import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";

const StyledMap = styled.div`
    width: 100%;
    height: 60rem;
`;

function Map() {
    const position = [51.505, -0.09];

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "calc(100vh - 30rem)" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;
