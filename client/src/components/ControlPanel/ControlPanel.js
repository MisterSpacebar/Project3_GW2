import React from "react";
import { Collection, Tabs, Tab, Card } from 'react-materialize';
import Item from "../Item/Item"

const controlPanel = (props) => {
  return (
    <Collection>

      <Tabs title="Best Sell" active>

        <Item />

      </Tabs>

    </Collection >
  )
}
export default controlPanel;
