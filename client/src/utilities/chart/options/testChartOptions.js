export const testChartOptions = (
  title,
  type,
  xAxisList,
  yAxisName,
  chartData,
  chartDataName,
  chartColor,
  tooltipClear
) => {
  return {
    chart: { margin: 100, marginTop: 100, marginRight: 100 },
    title: {
      text: title,
    },
    xAxis: {
      categories: xAxisList,
      title: {
        text: null,
        align: 'high',
      },
      tickInterval: 1,
    },
    yAxis: [
      {
        title: {
          text: yAxisName,
        },
        opposite: false,
      },
    ],
    plotOptions: {
      line: {
        dataLabels: {
          enabled: tooltipClear,
        },
        enableMouseTracking: !tooltipClear,
      },
    },
    series: [
      {
        type: type,
        name: chartDataName,

        stickyTracking: false,
        data: chartData,
        color: chartColor,
        marker: {
          enabled: false,
        },
        zIndex: 10,
      },
    ],
  };
};
