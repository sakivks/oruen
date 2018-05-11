import React from "react";
import { Grid } from "material-ui";
import { RegularCard, ItemGrid } from "components";
import ReactTable from "./Table.jsx"

class TableList extends React.Component {
  getTableContent = () => {};

  render() {
    return (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            cardTitle="Tasks"
            content={
              <ReactTable />
            }
          />
        </ItemGrid>
      </Grid>
    );
  }
}

export default TableList;
