export class TshirtDto {
    lastLocation: string;

    constructor(
        lastLocation?: string
    ) {
        lastLocation !== void (0) && (this.lastLocation = lastLocation);
    }
}