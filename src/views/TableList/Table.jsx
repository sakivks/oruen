import React from "react";
import { makeData, makeDataLevel2 } from "./Utils";
// import { RegularCard, Marked } from "components";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./table.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { RegularCard } from "components";

import CardView from "./CardView";
import produce from "immer";
// import { Button } from "material-ui";

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
        // Cell: this.renderEditable2
      }
    ];
  }

  renderEditable = cellInfo => {
    return (
      <div
        // style={{ backgroundColor: "#fafafa" }}
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
    const openDialog = () => {
      const nextState = produce(this.state, draftState => {
        draftState.data2[cellInfo.index].openDialog = true;
      });
      this.setState({ ...nextState });
    };

    const closeDialog = () => {
      const nextState = produce(this.state, draftState => {
        draftState.data2[cellInfo.index].openDialog = false;
      });
      this.setState({ ...nextState });
    };

    return (
      <Link to={`${match.path}/card/1`} target="_blank">
        {this.state.data2[cellInfo.index][cellInfo.column.id]}
      </Link>
      // <Link to={`db/workinprogress/Cards/${cellInfo.original.stage}/${this.state.data2[cellInfo.index][cellInfo.column.id]}`} target="_blank">{this.state.data2[cellInfo.index][cellInfo.column.id]}</ Link>
      // <div>
      //   <div style={{ cursor: "pointer" }} onClick={openDialog}>
      //     {this.state.data2[cellInfo.index][cellInfo.column.id]}
      //   </div>
      //   <CardView
      //     open={this.state.data2[cellInfo.index].openDialog}
      //     closeDialog={closeDialog}
      //     cardId={this.state.data2[cellInfo.index][cellInfo.column.id]}
      //   />
      // </div>
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
              return (
                <div
                  style={{
                    marginBottom: "20px",
                    border: "0.5px",
                    borderStyle: "solid",
                    borderColor: "rgba(0, 0, 0, 0.4)"
                    // borderRadius: "5px"
                    // borderTop: '0px'
                  }}
                >
                  <ReactTable
                    data={data}
                    columns={this.columnsLevel2}
                    defaultPageSize={3}
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
          <Route path={'/db/workinprogress/card/:id'} component={CardView} />
          {this.getWIPTable()}
        </Switch>
      </React.Fragment>
    );
  }
}

export default Table;
