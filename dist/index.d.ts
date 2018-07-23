export declare const enum TEST {
    MAJOR = "major",
    MINOR = "minor"
}
interface IMajorKey {
    key: TEST.MAJOR;
}
interface IMinorKey {
    key: TEST.MAJOR;
    attributeOnlyOnMinorKey: string;
}
export declare type Song = IMajorKey | IMinorKey;
export declare const test: () => string;
export {};
