import { TshirtLocationDto as tshirtLocation } from "./TshirtLocationDto";

export class TshirtDto {
    color: string;
    size: string;
    label: string;
    rfid: string;
    lastLocation: string;
    pastLocations = new Array<tshirtLocation>(0);
    

    constructor(
        color?: string,
        size?: string,
        label?: string,
        rfid?: string,
        lastLocation?: string,
        pastLocations?: Array<tshirtLocation>
    ) {
        color !== void (0) && (this.color = color);
        size !== void (0) && (this.size = size);
        label !== void (0) && (this.label = label);
        rfid !== void (0) && (this.rfid = rfid);
        lastLocation !== void (0) && (this.lastLocation = lastLocation);
        pastLocations !== void (0) && (this.pastLocations = pastLocations);
    }
}