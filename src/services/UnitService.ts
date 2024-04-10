export function vhToPx(vh: number) {
    const px = window.innerHeight / 100 * vh;
    return px;
}