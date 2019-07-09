export class TshirtDto {
    tshirtRfids = new Array<String>(0);


    constructor(
        tshirtRfids?: Array<String>
    ) {
        tshirtRfids !== void (0) && (this.tshirtRfids = tshirtRfids);
    }
}