import L, { tooltip } from "leaflet";
import bank from "./bank.png";

const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    tooltipAnchor: [0, 0],
  },
});

export const bankIcon = new LeafIcon({ iconUrl: bank });
