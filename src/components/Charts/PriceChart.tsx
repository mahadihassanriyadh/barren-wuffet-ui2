import React, { FunctionComponent, useEffect, useRef } from "react";
import {
  createChart,
  LineStyle,
  CrosshairMode,
  Time,
} from "lightweight-charts";
import { api } from "../../config/env";
import { useQuery } from "@tanstack/react-query";
import { Address, ETH_ADDRESS, USD_ADDRESS } from "../../config/tokens";

const PriceChart: FunctionComponent<{
  title: string;
  fromAddress: Address;
  toAddress: Address;
}> = ({ fromAddress, toAddress }) => {
  const backgroundColor = "#222";
  const lineColor = "#2962FF";
  const textColor = "#C3BCDB";
  const crossHairColor = "#C3BCDB44";
  const gridColor = "#444";
  const borderColor = "#71649C";
  const chartContainerRef = useRef({} as HTMLDivElement);
  const default_end_time = Math.floor(Date.now() / 1000);
  const default_start_time = default_end_time - 60 * 60 * 24;
  const { data: priceFeedsData } = useQuery(["priceFeed"], () =>
    api.getPriceFeed(
      default_start_time,
      default_end_time,
      fromAddress, //ETH_ADDRESS,
      toAddress //"0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a"
    )
  );

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      watermark: {
        text: "Powered by Coingecko",
        fontSize: 12,
        visible: true,
        horzAlign: "center",
        vertAlign: "center",
        color: "rgba(171, 71, 188, 0.5)",
      },
      layout: {
        background: { color: backgroundColor },
        textColor: textColor,
      },
      grid: {
        vertLines: { color: gridColor },
        horzLines: { color: gridColor },
      },
      width: chartContainerRef.current.clientWidth,
      height: 500,
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
        priceFormatter: (amt: number) => `${amt}`,
      },
    });
    chart.priceScale().applyOptions({
      borderColor: borderColor,
    });
    chart.timeScale().applyOptions({
      borderColor: borderColor,
    });
    chart.timeScale().fitContent();

    // If there are 2, make the second line red, and use a second scale on the chart on the left
    const numCharts =
      priceFeedsData?.length === undefined ? 0 : priceFeedsData?.length;
    if (numCharts === 2) {
      chart.priceScale("left").applyOptions({ visible: true });
    }
    const colors = ["#17B5E5", "#E51717"];
    const priceScaleIds = ["right", "left"];
    priceFeedsData?.forEach(({ title, feed }, idx) => {
      const newSeries = chart.addLineSeries({
        title: title,
        priceScaleId: priceScaleIds[idx],
        color: colors[idx],
      });
      newSeries.setData(feed || []);
    });

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
    priceFeedsData,
  ]);

  return <div ref={chartContainerRef} />;
};

export default PriceChart;
