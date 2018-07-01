import React from "react";
import { makeData, makeDataLevel2 } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./table.css";
import { Route, Link, Switch } from "react-router-dom";
import { RegularCard } from "components";

import CardView from "./CardView";

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
      data2: makeDataLevel2()
    };
    this.columns = [
      {
        Header: "Project Stages",
        accessor: "stage",
        minWidth: 200,
        Cell: this.renderEditable
      },
      {
        Header: "Fee (INR)",
        accessor: "fee",
        Cell: this.renderEditable
      },
      {
        Header: "Hours",
        accessor: "hrs",
        Cell: this.renderEditable
      },
      {
        Header: "Budget",
        accessor: "budget",
        Cell: this.renderEditable
      },
      {
        Header: "Rate",
        accessor: "rate",
        Cell: this.renderEditable
      }
    ];
    this.columnsLevel2 = [
      {
        Header: "Project Sub Stages",
        accessor: "subStage",
        minWidth: 300,
        Cell: this.renderEditable2
      },
      {
        Header: "Fee (INR)",
        accessor: "fee"
      }
    ];
  }

  renderEditable = cellInfo => {
    return (
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };

  renderEditable2 = cellInfo => {
    const { match } = this.props;
    const index = cellInfo.index;
    cellInfo = cellInfo.original;

    return (
      <Link to={`${match.path}/card/1`} target="_blank">
        {
          this.state.data.find(
            task => task.stage === cellInfo.row.original.stage
          ).subtask[index].subStage
        }
      </Link>
    );
  };

  getWIPTable = () => {
    const { data } = this.state;
    return (
      <RegularCard
        cardTitle="Tasks"
        content={
          <ReactTable
            data={data}
            columns={this.columns}
            defaultPageSize={15}
            showPagination={false}
            minRows={0}
            className="-highlight"
            SubComponent={row => {
              console.log(row.original.subtask.map((entry) => {return {row, ...entry}}));
              return (
                <div
                  style={{
                    marginBottom: "20px",
                    border: "0.5px",
                    borderStyle: "solid",
                    borderColor: "rgba(0, 0, 0, 0.4)"
                  }}
                >
                  <ReactTable
                    data={row.original.subtask.map((entry) => {return {row, ...entry}})}
                    columns={this.columnsLevel2}
                    defaultPageSize={10}
                    minRows={1}
                    showPagination={false}
                  />
                </div>
              );
            }}
          />
        }
      />
    );
  };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path={"/db/workinprogress/card/:id"} component={CardView} />
          {this.getWIPTable()}
        </Switch>
      </React.Fragment>
    );
  }
}

export default Table;
