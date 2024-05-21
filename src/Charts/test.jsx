// Step 1 - Include react

import React, { useState, useEffect, useCallback } from "react";
import FusionCharts from "fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import ReactFC from "react-fusioncharts";


const schema = [
    {
      name: "Time",
      type: "date",
      format: "%-m/%-d/%Y"
    },
    {
      name: "Sales",
      type: "number"
    }
  ];

ReactFC.fcRoot(FusionCharts, TimeSeries);
const chart_props = {
  timeseriesDs: {
    type: "timeseries",
    width: "300",
    height: "400",
    dataEmptyMessage: "Fetching data...",
    dataSource: {
      caption: { text: "Online Sales of a SuperStore in the US" },
      data: null,
      yAxis: [
        {
          plot: [
            {
              value: "Sales ($)"
            }
          ]
        }
      ]
    }
  }
};
const API_URL =
  "https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/examples/online-sales-single-series/data.json";

export default function ChartViewer() {
  const [ds, setds] = useState(chart_props);
  const loadData = useCallback(async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );
      const options = { ...ds };
      options.timeseriesDs.dataSource.data = fusionTable;
      setds(options);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    console.log("render");
    loadData();
  }, [loadData]);

  return(
    <div>
        <ReactFC {...ds.timeseriesDs} />
    </div>
  )
  }