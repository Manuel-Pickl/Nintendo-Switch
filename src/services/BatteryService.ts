export async function getBatteryLevel(): Promise<number> {
    try {
        // @ts-ignore
        const battery = await (navigator).getBattery();
        const level = battery.level * 100;
        return level;
    } catch (error) {
        console.error("Failed to retrieve battery level:", error);
        return 0;
    }
};
