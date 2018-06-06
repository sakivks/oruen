import React from "react";
import { Grid } from "material-ui";
import { RegularCard, ItemGrid } from "components";
import Table from "./Table.jsx"

class TableList extends React.Component {
  getTableContent = () => {};

  render() {
    const { match } = this.props
    return (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle="Tasks"
            content={
              <Table match={match}/>
            }
          />
        </ItemGrid>
      </Grid>
    );
  }
}

export default TableList;
