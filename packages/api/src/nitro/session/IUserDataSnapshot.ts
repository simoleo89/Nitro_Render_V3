export interface IUserDataSnapshot
{
    userId: number;
    userName: string;
    figure: string;
    gender: string;
    realName: string;
    respectsReceived: number;
    respectsLeft: number;
    respectsPetLeft: number;
    canChangeName: boolean;
    clubLevel: number;
    securityLevel: number;
    isAmbassador: boolean;
    isEmailVerified: boolean;
    isNoob: boolean;
    isAuthenticHabbo: boolean;
    isSystemOpen: boolean;
    isSystemShutdown: boolean;
    uiFlags: number;
    tags: ReadonlyArray<string>;
}
