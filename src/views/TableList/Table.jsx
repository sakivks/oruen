import React from "react";
import { makeData } from "./Utils";
import { withStyles, TextField } from "material-ui";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./table.css";
import { Route, Link, Switch } from "react-router-dom";
import { RegularCard, Button } from "components";

import CardView from "./CardView";
// import CustomInput from "../../components/CustomInput/CustomInput";

const styles = theme => ({
  button: {
    margin: 30
  },
  addColumnTextbox: {
    marginRight: 10
  }
});

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
      newColumnName: "",
      columns: [
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
      ],
      columnsLevel2: [
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
      ]
    };
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

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  addColumn = () => {
    this.setState((state) => {
      return {
        columns: [
          ...state.columns,
          {
            Header: state.newColumnName,
            accessor: state.newColumnName,
            Cell: this.renderEditable
          }
        ],
        newColumnName: ""
      };
    });
  };

  addRow = () => {
    this.setState((state, props) => {
      return {
        data: [...state.data, {}]
      };
    });
    console.log('====================================');
    console.log(this.state.data);
    console.log('====================================');
  };

  getWIPTable = () => {
    const { data, columns, columnsLevel2, newColumnName } = this.state;
    const { classes } = this.props;
    return (
      <RegularCard
        cardTitle="Tasks"
        footer={
          <React.Fragment>
            <Button className={classes.button} onClick={this.addRow}>
              Add Row
            </Button>
            <div style={{ float: "right" }}>
              <TextField
                className={classes.addColumnTextbox}
                label="New Column name"
                value={newColumnName}
                onChange={this.handleChange("newColumnName")}
              />
              <Button
                className={classes.button}
                onClick={this.addColumn}
                disabled={newColumnName === ""}
              >
                Add Columns
              </Button>
            </div>
          </React.Fragment>
        }
        content={
          <ReactTable
            data={data}
            columns={columns}
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
                  }}
                >
                  <ReactTable
                    data={row.original.subtask.map(entry => {
                      return { row, ...entry };
                    })}
                    columns={columnsLevel2}
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

export default withStyles(styles)(Table);
