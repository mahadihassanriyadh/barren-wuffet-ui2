import React, { useState } from 'react';
import { t } from "@lingui/macro";
import { LaunchButtons } from '../../api/models';
import LaunchModal from './LaunchModal';
import { NavLink } from 'react-router-dom';
import Button from './Button';

const LaunchAppButton = () => {
    const [launch, setLaunch] = useState(false);
    const LaunchButtons: LaunchButtons[] = [
        {
          id: 0,
          name: t`Trader: Manage Fund`,
          url: "/fund/portfolio",
        },
        { 
          id: 2,
          name: t`Trader: Create Fund`,
          url: "/create-fund",
        }, 
        {
          id: 1,
          name: t`Investor`,
          url: "/invest",
        },
    ]
    return (
        <LaunchModal
            launch={launch}
            setLaunch={setLaunch}
            launchButtons={
            LaunchButtons.map(btn => {
                return (
                <li key={btn.id}>
                    <NavLink onClick={()=>setLaunch(false)} className="block" to={btn.url}>
                    <Button label={btn.name} />
                    </NavLink>
                </li>
                )
                })
            }
        />
    );
};

export default LaunchAppButton;
