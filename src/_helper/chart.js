export function hexToRGB(hex, alpha) {
    if (!hex || hex.length !== 7 || hex[0] !== "#") {
        throw new Error("Invalid hex color format");
    }

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return alpha !== undefined
        ? `rgba(${r}, ${g}, ${b}, ${alpha})`
        : `rgb(${r}, ${g}, ${b})`;
}

export function getLocalStorageItem(key, defaultValue = "") {
    if (typeof window !== "undefined") {
        const item = localStorage.getItem(`Axelit-Next-Theme-${key}`);
        return item !== null ? item : defaultValue;
    }
    return defaultValue;
}

export function generateDayWiseTimeSeries(baseval, count, yrange) {
    const series = [];
    for (let i = 0; i < count; i++) {
        const y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push([baseval, y]);
        baseval += 86400000;
    }
    return series;
}

export function generateData(baseval, count, yrange) {
    const series = [];
    for (let i = 0; i < count; i++) {
        const y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
        series.push([baseval, y, z]);
        baseval += 86400000;
    }
    return series;
}

export function generateHeatmapData(count, yrange) {
    const series = [];
    for (let i = 0; i < count; i++) {
        const x = (i + 1).toString();
        const y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push({ x, y });
    }
    return series;
}