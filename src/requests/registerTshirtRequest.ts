export class registerTshirtRequests {
    color: string;
    size: string;
    label: string;

    constructor(
        color?: string,
        size?: string,
        label?: string
    ) {
        color !== void (0) && (this.color = color);
        size !== void (0) && (this.size = size);
        label !== void (0) && (this.label = label);
    }
}