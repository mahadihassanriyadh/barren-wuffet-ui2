import React from 'react';
import { numberWithCommas, padDecimals } from '../../data/formatting';

const AssetBox = (props: any) => {
    const { img, name, dollarValue, shortName, balance, down, percentage } = props.asset;
    return (
        <div className="flex space-x-4 items-center bg-[#282835] px-5 py-4 rounded-xl shadow-xl">
            <img src={img} alt="" />
            <div className="flex justify-between items-end w-full">
            <div>
                <p className="text-white font-medium">{name}</p>
                <p className="text-white text-lg font-medium">$ {numberWithCommas(dollarValue)}</p>
            </div>
            <div>
                {balance && <p className="text-white text-end mb-1">{balance} <span className="text-gray-500">{ shortName }</span></p>}
                <div className="flex items-center space-x-3">
                    {
                        down && <p className="text-red-400 text-xs">-${down}</p>
                    }
                    {
                        percentage && <p className="text-xs bg-[#33333f] py-1 px-2 rounded-xl ml-2 text-gray-400">{ padDecimals(percentage, 0) } %</p>  
                    }
                </div>
            </div>
            </div>
        </div>
    );
};

export default AssetBox;