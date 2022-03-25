export const testChartOptions = (
  title,
  type,
  xAxisList,
  yAxisUnit,
  yAxisData,
  yAxisDataName,
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
    },

    yAxis: [
      {
        title: {
          text: yAxisUnit,
        },
      },
    ],

    plotOptions: {
      line: {
        dataLabels: {
          enabled: tooltipClear,
        },
        enableMouseTracking: !tooltipClear,
      },

      spline: {
        states: {
          typehover: {
            lineWidth: 5,
          },
        },
      },

      area: {
        marker: {
          enabled: false,
        },
      },
    },

    series: [
      {
        type: type,
        name: yAxisDataName,
        stickyTracking: false,
        data: yAxisData,
        color: chartColor,

        zIndex: 10,
      },
    ],

    legend: {
      align: 'right',
      verticalAlign: 'top',
      layout: 'vertical',
      x: 0,
      y: 0,
    },
  };
};
