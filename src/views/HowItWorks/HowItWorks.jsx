import React from "react";
// import { Grid, InputLabel } from "material-ui";

import { RegularCard, Button, Marked } from "components";

const steps = `- To get our LOS, get us in touch with your retained law firm or choose a law firm from our select panel and we wil set up our operating system to which you will have direct access from your Neuro Circle dashboard.

- LOS is based on a real time ‘Work in Progress’ window where you can monitor exhaustive set of crucial data related to your legal matter running in your law firm.

- With live tracking of your work in progress, you can communicate and instruct your law firm on budgetary guidelines and on such other crucial factors for improved management and transparency on your matters and bills.

- More so, data from WIP window will be readily available in useful analytics on your dashboard which your company can measure up for optimal business decisions in future.
`;

export default class HowItWorks extends React.Component {
  render() {
    return (
      <div>
        <RegularCard
          cardTitle="How it works"
        //   cardSubtitle=""
          content={
            <div>
                <Marked md={
                   steps
                }/>
            </div>
          }
        />
      </div>
    );
  }
}

