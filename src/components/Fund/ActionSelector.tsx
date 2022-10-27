import React from "react";
import { Menu } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

import {
  getWhitelistedActions,
  ActionTypes,
  Action,
} from "../../config/actions";
import Selector from "../Form/Selector";
import { t } from "@lingui/macro";

export default function ActionSelector(props: {
  chainId: number;
  selectedAction?: Action;
  onSelectAction: (value: Action) => void;
  actionType: ActionTypes;
}) {
  const { chainId, selectedAction, onSelectAction, actionType } = props;

  const whitelistedActions = getWhitelistedActions(
    chainId,
    actionType || ActionTypes.Trading
  );
  return (
    <Selector
      items={whitelistedActions}
      selectedItem={selectedAction}
      setSelectedItem={onSelectAction}
      buttonLabel={t`Choose Action`}
    />
  );
}
