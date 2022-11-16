import { useState } from "react";
import Deposit from "./Deposit";
import Swap from "./Swap";
import Withdraw from "./Withdraw";

const Action = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="mt-[10px] container mx-auto w-[350px] rounded-[15px] px-[15px] pt-[28px] pb-[26px] bg-card">
      <div className="flex justify-around h-[47px] select-none">
        <div
          className={`flex items-center justify-center px-[15px] 
                ${
                  tab === 0
                    ? "rounded-t-[12px] bg-bcolor border-x-[1px] border-t-[1px] border-bcolor rounded-t-[12px]"
                    : "border-x-[1px] border-t-[1px] border-bcolor rounded-t-[12px]"
                }`}
          onClick={() => setTab(0)}
        >
          <span
            className={
              tab === 0
                ? "text-otext text-[12px] font-ubuntu"
                : "text-white text-[12px] font-ubuntu"
            }
          >
            DEPOSIT
          </span>
        </div>
        <div
          className={`flex items-center justify-center px-[15px] 
                ${
                  tab === 1
                    ? "rounded-t-[12px] bg-bcolor border-x-[1px] border-t-[1px] border-bcolor rounded-t-[12px]"
                    : "border-x-[1px] border-t-[1px] border-bcolor rounded-t-[12px]"
                }`}
          onClick={() => setTab(1)}
        >
          <span
            className={
              tab === 1
                ? "text-otext text-[12px] font-ubuntu"
                : "text-white text-[12px] font-ubuntu"
            }
          >
            WITHDRAW/CLAIM
          </span>
        </div>
        <div
          className={`flex items-center justify-center px-[15px] 
                ${
                  tab === 2
                    ? "rounded-t-[12px] bg-bcolor border-x-[1px] border-t-[1px] border-bcolor rounded-t-[12px]"
                    : "border-x-[1px] border-t-[1px] border-bcolor rounded-t-[12px]"
                }`}
          onClick={() => setTab(2)}
        >
          <span
            className={
              tab === 2
                ? "text-otext text-[12px] font-ubuntu"
                : "text-white text-[12px] font-ubuntu"
            }
          >
            SWAP
          </span>
        </div>
      </div>

      {(() => {
        switch (tab) {
          case 0:
            return <Deposit />;
          case 1:
            return <Withdraw />;
          case 2:
            return <Swap />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default Action;
