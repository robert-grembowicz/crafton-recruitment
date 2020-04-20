export default function () {
  const longitude = 52.403124;
  const latitude = 16.9078014;

  const mymap = L.map("mapid").setView([longitude, latitude], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mymap);

  const mapPointer = L.icon({
    iconUrl: "images/map-pointer.png",
    iconSize: [36, 50],
    iconAnchor: [15, 20],
  });

  L.marker([longitude, latitude], { icon: mapPointer }).addTo(mymap);
}
