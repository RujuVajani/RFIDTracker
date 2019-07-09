export class TshirtLocationDto {
    timestamp: string;
    location: string;

    constructor(timestamp?: string, location?: string) {
        this.timestamp = timestamp;
        this.location = location;
    }
}