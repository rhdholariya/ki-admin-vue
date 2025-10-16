import { generateDayWiseTimeSeries, hexToRGB, getLocalStorageItem } from '@/_helper';

// Mock data for ApexChartsData (replace with your actual data)
const ApexChartsData = {
    dataSeries: [
        [{ value: 10 }, { value: 20 }, { value: 15 }, { value: 25 }, { value: 18 }, { value: 30 }, { value: 22 }, { value: 28 }, { value: 35 }, { value: 32 }, { value: 40 }, { value: 38 }],
        [{ value: 5 }, { value: 12 }, { value: 8 }, { value: 15 }, { value: 10 }, { value: 20 }, { value: 18 }, { value: 25 }, { value: 22 }, { value: 30 }, { value: 28 }, { value: 35 }, { value: 32 }, { value: 40 }, { value: 38 }, { value: 45 }, { value: 42 }, { value: 50 }],
        [{ value: 15 }, { value: 25 }, { value: 20 }, { value: 30 }, { value: 22 }, { value: 35 }, { value: 28 }, { value: 40 }, { value: 32 }, { value: 45 }, { value: 38 }, { value: 50 }]
    ]
};

let ts1 = 1388534400000;
let ts2 = 1388620800000;
let ts3 = 1389052800000;

const dataSet = [[], [], []];

for (let i = 0; i < 12; i++) {
    ts1 += 86400000;
    dataSet[0].push([ts1, ApexChartsData.dataSeries[2][i]?.value ?? 0]);
}
for (let i = 0; i < 18; i++) {
    ts2 += 86400000;
    dataSet[1].push([ts2, ApexChartsData.dataSeries[1][i].value]);
}
for (let i = 0; i < 12; i++) {
    ts3 += 86400000;
    dataSet[2].push([ts3, ApexChartsData.dataSeries[0][i].value]);
}

export const basicAreaChart = {
    series: [
        {
            name: "STOCK ABC",
            data: [10, 51, 35, 51, 59, 62, 79, 91, 148],
        },
    ],
    options: {
        chart: {
            fontFamily: 'Rubik, serif',
            zoom: { enabled: false },
        },
        colors: [hexToRGB(getLocalStorageItem("color-primary", "#0f626a"), 1)],
        dataLabels: { enabled: false },
        stroke: { curve: "smooth" },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                colorStops: [
                    { offset: 0, color: hexToRGB(getLocalStorageItem("color-primary", "#0f626a"), 1), opacity: 1 },
                    { offset: 50, color: hexToRGB(getLocalStorageItem("color-primary", "#0f626a"), 1), opacity: 1 },
                    { offset: 100, color: hexToRGB(getLocalStorageItem("color-primary", "#0f626a"), 0.1), opacity: 0.1 },
                ],
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
            ],
            labels: { style: { colors: [], fontSize: "14px", fontWeight: 500 } },
        },
        yaxis: {
            labels: { style: { colors: [], fontSize: "14px", fontWeight: 500 } },
        },
        grid: {
            show: true,
            borderColor: "rgba(var(--dark),.2)",
            strokeDashArray: 2,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: true } },
        },
        tooltip: {
            x: { show: false },
            style: { fontSize: "16px" },
        },
    },
};

export const splineAreaChart = {
    series: [
        { name: "series1", data: [31, 40, 28, 51, 42, 109, 100] },
        { name: "series2", data: [11, 32, 45, 32, 34, 52, 41] },
    ],
    options: {
        chart: {
            fontFamily: 'Rubik, serif',
            height: 350,
            type: "area",
        },
        colors: ["#0AB964", "#F9C123"],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 1,
                opacityTo: 0,
                stops: [0, 100],
            },
        },
        dataLabels: { enabled: false },
        stroke: { curve: "smooth" },
        xaxis: {
            type: "datetime",
            categories: [
                "2018-09-19T00:00:00.000Z",
                "2018-09-19T01:30:00.000Z",
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z",
                "2018-09-19T05:30:00.000Z",
                "2018-09-19T06:30:00.000Z",
            ],
            labels: { style: { colors: [], fontSize: "14px", fontWeight: 500 } },
        },
        yaxis: {
            labels: { style: { colors: [], fontSize: "14px", fontWeight: 500 } },
        },
        tooltip: {
            x: { format: "dd/MM/yy HH:mm" },
        },
        grid: {
            show: true,
            borderColor: "rgba(var(--dark),.2)",
            strokeDashArray: 2,
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: true } },
        },
    },
};

export const irregularSeries = {
    series: [
        { name: "PRODUCT A", data: dataSet[0] },
        { name: "PRODUCT B", data: dataSet[1] },
        { name: "PRODUCT C", data: dataSet[2] },
    ],
    options: {
        chart: {
            fontFamily: 'Rubik, serif',
            type: "area",
            stacked: false,
            height: 350,
            zoom: { enabled: false },
        },
        dataLabels: { enabled: false },
        markers: { size: 0 },
        colors: ["#0AB964", "#E14E5A", "#F9C123"],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100],
            },
        },
        yaxis: {
            labels: {
                style: { fontSize: "14px", fontWeight: 500 },
                offsetX: 0,
                formatter: (val) => (val / 1000000).toFixed(2),
            },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        xaxis: {
            type: "datetime",
            labels: {
                style: { fontSize: "14px", fontWeight: 500 },
            },
        },
        tooltip: {
            x: { show: false },
            style: { fontSize: "16px" },
        },
        legend: {
            position: "top",
            horizontalAlign: "right",
            offsetX: -10,
        },
    },
};

export const stackedAreaChart = {
    series: [
        {
            name: "South",
            data: generateDayWiseTimeSeries(
                new Date("11 Feb 2017 GMT").getTime(),
                20,
                { min: 10, max: 60 }
            ),
        },
        {
            name: "North",
            data: generateDayWiseTimeSeries(
                new Date("11 Feb 2017 GMT").getTime(),
                20,
                { min: 10, max: 20 }
            ),
        },
        {
            name: "Central",
            data: generateDayWiseTimeSeries(
                new Date("11 Feb 2017 GMT").getTime(),
                20,
                { min: 10, max: 15 }
            ),
        },
    ],
    options: {
        chart: {
            type: "area",
            fontFamily: 'Rubik, serif',
            height: 350,
            animations: { enabled: false },
            zoom: { enabled: false },
        },
        colors: [
            hexToRGB(getLocalStorageItem("color-secondary", "#6c757d"), 1),
            hexToRGB(getLocalStorageItem("color-primary", "#0f626a"), 1),
            hexToRGB(getLocalStorageItem("color-success", "#198754"), 1)
        ],
        dataLabels: { enabled: false },
        stroke: { curve: "straight" },
        fill: {
            opacity: 0.8,
            type: "pattern",
            pattern: {
                style: ["verticalLines", "horizontalLines"],
                width: 5,
                height: 6,
            },
        },
        markers: {
            size: 5,
            hover: { size: 9 },
        },
        tooltip: {
            x: { show: false },
            style: { fontSize: "16px" },
        },
        theme: { palette: "palette1" },
        xaxis: {
            type: "datetime",
            labels: { style: { fontSize: "14px", fontWeight: 500 } },
        },
        yaxis: {
            labels: { style: { fontSize: "14px", fontWeight: 500 } },
        },
    },
};