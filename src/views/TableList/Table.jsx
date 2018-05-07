import React from "react";
import { render } from "react-dom";
import { makeData } from "./Utils";
import { RegularCard } from "components";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const columns = [
  {
    Header: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "firstName"
      },
      {
        Header: "Last Name",
        id: "lastName",
        accessor: d => d.lastName
      }
    ]
  },
  {
    Header: "Info",
    columns: [
      {
        Header: "Age",
        accessor: "age"
      },
      {
        Header: "Status",
        accessor: "status"
      }
    ]
  },
  {
    Header: "Stats",
    columns: [
      {
        Header: "Visits",
        accessor: "visits"
      }
    ]
  }
];

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={15}
          showPagination={false}
          minRows={0}
          className="-striped -highlight"
          SubComponent={row => {
            return (
              <div style={{ padding: "20px" }}>
                <ReactTable
                  data={data}
                  columns={columns}
                  defaultPageSize={3}
                  showPagination={false}
                  SubComponent={row => {
                    return (
                      <div style={{ padding: "20px" }}>
                        <RegularCard
                            cardTitle="Term Sheet negotiation"
                            cardSubtitle="bla bla bla"
                            content={
                                <div>Detailed view of the task here</div>
                            }
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
// render(<App />, document.getElementById("root"));

// import ReactTable from "react-table";
// import { ReactTableDefaults } from "react-table";

// import "react-table/react-table.css";

// const data = [
//     {
//         name: "Tanner Linsley",
//         age: 26,
//         friend: {
//             name: "Jason Maurer",
//             age: 23
//         }
//     },
//     {
//         name: "Tyrion Lannistor",
//         age: 35,
//         friend: {
//             name: "John Snow",
//             age: 32
//         }
//     }
// ];

// const columns = [
//     {
//         Header: "Name",
//         accessor: "name" // String-based value accessors!
//     },
//     {
//         Header: "Age",
//         accessor: "age",
//         Cell: props => <span className="number">{props.value}</span> // Custom cell components!
//     },
//     {
//         id: "friendName", // Required because our accessor is not a string
//         Header: "Friend Name",
//         accessor: d => d.friend.name // Custom value accessors!
//     },
//     {
//         Header: props => <span>Friend Age</span>, // Custom header components!
//         accessor: "friend.age"
//     }
// ];

// Object.assign(ReactTableDefaults, {
//     showPagination: false,
//     minRows: 0
// });
