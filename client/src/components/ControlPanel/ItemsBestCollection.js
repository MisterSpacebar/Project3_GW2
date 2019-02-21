import React from "react";
import {Collection, Tabs, Tab, Card} from 'react-materialize';
// import Item from '../Item/Item'
const itemsBest= () => (
    <Collection>
          <Tabs className='z-depth-1'>
            <Tab title='Best Sell' active>
              {/* <Item /> */}
              <Card className="grey black-text">best selling item 2</Card>
              <Card className="grey black-text">best selling item 3</Card>
              <Card className="grey black-text">best selling item 4</Card>
              <Card className="grey black-text">best selling item 5</Card>
            </Tab>
            <Tab title='Best Buy'>
              <Card className="grey black-text">best buying item 1</Card>
              <Card className="grey black-text">best buying item 2</Card>
              <Card className="grey black-text">best buying item 3</Card>
              <Card className="grey black-text">best buying item 4</Card>
              <Card className="grey black-text">best buying item 5</Card>
            </Tab>
            </Tabs>
       </Collection>
);
export default itemsBest;
