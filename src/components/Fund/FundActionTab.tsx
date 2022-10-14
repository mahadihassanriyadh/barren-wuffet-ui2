import { Trans } from '@lingui/macro';
import React from 'react';

const FundActionTab = (props: any) => {
    const { text, selected, setSelected } = props;
    return (
        <button onClick={() => setSelected(text.toLowerCase())} className={`font-semibold text-xl shadow-md px-14 py-3 rounded-t-xl hover:bg-gray-700 ${selected === text.toLowerCase() ? 'text-yellow-400 bg-[#282835]' : 'text-white border-t border-x border-gray-700'}`}>
            <Trans>
                { text }
            </Trans>
        </button>
    );
};

export default FundActionTab;