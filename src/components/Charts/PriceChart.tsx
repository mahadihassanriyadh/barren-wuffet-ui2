import React, { FunctionComponent, useEffect, useRef } from "react";
import { createChart, LineStyle, CrosshairMode } from "lightweight-charts";
import { generateCandlestickData } from "../../api/priceChart";

const PriceChart: FunctionComponent<{
  title: string;
  fromToken: string;
  toToken: string;
  priceFeed: () => { value: number; time: number }[];
}> = (props) => {
  const backgroundColor = "#222";
  const lineColor = "#2962FF";
  const textColor = "#C3BCDB";
  const crossHairColor = "#C3BCDB44";
  const gridColor = "#444";
  const borderColor = "#71649C";
  const chartContainerRef = useRef({} as HTMLDivElement);

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: backgroundColor },
        textColor: textColor,
      },
      grid: {
        vertLines: { color: gridColor },
        horzLines: { color: gridColor },
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
      crosshair: {
        // Change mode from default 'magnet' to 'normal'.
        // Allows the crosshair to move freely without snapping to datapoints
        mode: CrosshairMode.Normal,

        // Vertical crosshair line (showing Date in Label)
        vertLine: {
          width: 4,
          color: crossHairColor,
          style: LineStyle.Solid,
        },

        // Horizontal crosshair line (showing Price in Label)
        horzLine: {
          color: crossHairColor,
        },
      },
      localization: {
        priceFormatter: (amt: number) => `${amt} eth`,
      },
    });
    chart.priceScale().applyOptions({
      borderColor: borderColor,
    });
    chart.timeScale().applyOptions({
      borderColor: borderColor,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addCandlestickSeries();
    const candleStickData = generateCandlestickData();

    newSeries.setData(candleStickData);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [
    backgroundColor,
    lineColor,
    textColor,
    gridColor,
    crossHairColor,
    borderColor,
  ]);

  return <div ref={chartContainerRef} />;
};

export default PriceChart;
