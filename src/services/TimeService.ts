export function getTime(show24Hours: boolean = true): string {
    return new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: !show24Hours,
    });
}