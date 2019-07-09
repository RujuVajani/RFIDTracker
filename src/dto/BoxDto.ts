export class BocDto {
    tshirtRfids: string[];

    constructor(tshirtRfids?: Array<string>) {
        this.tshirtRfids = tshirtRfids;
    }
}