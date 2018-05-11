import React from "react";
import { makeData, makeDataLevel2 } from "./Utils";
import { RegularCard, Marked } from "components";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./table.css";

const desc = `__DESCRIPTION__ : This card covers the pre-financing capitalization of the company. You should only include shares, options and warrants that are outstanding prior to the financing or top up shares that will be
counted in the fully diluted pre-money shares (i.e., don't include the shares being issued in the
financing in this interview page).


__TEAM__:

Fee Earner    | Role          
------------- |-------------
Assign        | Senior Associate  
Assign        | Associate     
Assign        | Partner
Assign | Paralegal


__COMMENT__:
Hi Senior Associate,
Please coordinate with the paralegal to finish this card by tomorrow noon.
Thanks,
Partner

`


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
        minWidth:200,
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
        accessor: "stage",
        minWidth: 300,
        Cell: this.renderEditable2
      },
      {
        Header: "Fee (INR)",
        accessor: "fee",
        Cell: this.renderEditable2
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
    return (
      <div
        // style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data2 = [...this.state.data2];
          data2[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data2 });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data2[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={this.columns}
          defaultPageSize={15}
          showPagination={false}
          minRows={0}
          className="-highlight"
          SubComponent={row => {
            return (

              <div style={{ 
                margin: "20px", 
                border: "0.5px", 
                borderStyle:'solid',
                borderColor:'rgba(0, 0, 0, 0.4)',
                borderRadius: "5px" 
                // borderTop: '0px'
                }}>
                <ReactTable
                  data={data}
                  columns={this.columnsLevel2}
                  defaultPageSize={3}
                  showPagination={false}
                  SubComponent={row => {
                    return (
                      <div style={{ padding: "20px" }}>
                        <RegularCard
                          plainCard
                          headerColor="green"
                          cardTitle="Term Sheet negotiation"
                          cardSubtitle="Capitalization Table Creation"
                          content={<div>
                            <Marked md={desc}/>
                            </div>}
                        />
                      </div>
                    );
                  }}
                />

              </div>
            );
          }}
        />
        <br />
      </div>
    );
  }
}

export default Table;
