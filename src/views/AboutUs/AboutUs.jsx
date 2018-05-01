import React from "react";
// import { Grid, InputLabel } from "material-ui";

import { RegularCard, Button, Marked } from "components";
const abtus = 
`Welcome aboard!

Neuro Circle simplifies law firm engagement cycle for your
company. Right from floating a proposal for legal work to our
select panel of best in class law firms across domains, we assist
you with an user friendly ‘Legal Operating System’ (LOS) with real
time access to your running bills and projects for optimised
management of matters with law firm/s.

Key features of our operating system, LOS empowers your company to
keep tabs on its budgets and related critical information through
systematic analytics for achieving robust transparency and money
savings around legal bills.
`;

export default class HowItWorks extends React.Component {
  render() {
    return (
      <div>
        <RegularCard
          cardTitle="Neuro Circle"
          cardSubtitle="Reducing friction in Legal domain"
          content={
            <Marked md={abtus}/>
          }
        />
      </div>
    );
  }
}
