import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 22.5726, // Kolkata default example
  lng: 88.3639,
};

export default function MapsSection() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBBWQn6lrATLsGNAsUE8BBbBHm01Qv08aI",
  });

  if (!isLoaded) return <p className="text-center text-gray-500">Loading Map...</p>;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border">
      <h2 className="text-lg font-semibold mb-3">Warehouse & Store Locations</h2>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>        
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
