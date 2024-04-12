export function getTime(show24Hours: boolean = true): string {
    const time: string = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: !show24Hours,
    });

    return time;
}
// export function getSignalStrength(): boolean {
//     // @ts-ignore
//     const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
//     if (!connection) {
//         return false;
//     }

//     const connectedOverWifi: boolean = connection.downlink > 5 && connection.rtt < 50;
//     return connectedOverWifi;
// }

export async function getBatteryLevel(): Promise<number> {
    try {
        // @ts-ignore
        const battery = await (navigator).getBattery();
        const batteryLevel = Math.round(battery.level * 100);
        return batteryLevel;
    } catch (error) {
        throw Error(`Failed to retrieve battery level:\n${error}`);
    }
};