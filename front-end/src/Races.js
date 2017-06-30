import React, { Component } from "react";
import "./App.css";
import "whatwg-fetch";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Select from "react-select";
import "react-select/dist/react-select.css";
import { Row, Col } from "react-bootstrap";

class Races extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selected: 0,
      viewing: {}
    };
  }

  componentDidMount() {
    fetch("/api/races")
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        this.setState({
          data: json,
          viewing: json[0]
        });
      })
      .catch(function(ex) {
        console.log("parsing failed", ex);
      });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleChange(e) {
    this.setState({
      viewing: this.state.data[e.value],
      selected: e.value
    });
  }

  render() {
    const columns = [
      {
        Header: "Name",
        accessor: "racer"
      },
      {
        Header: "Run 1",
        accessor: "run1"
      },
      {
        Header: "Run 2",
        accessor: "run2"
      },
      {
        Header: "Combined",
        accessor: "combined"
      }
    ];

    var options = [];
    for (var i = 0; i < this.state.data.length; i++) {
      options.push({
        value: i,
        label: this.state.data[i].name
      });
    }

    return (
      <div className="Races">
        <Row>
          <Col md={2} />
          <Col md={8}>
            <Select
              value={this.state.selected}
              options={options}
              onChange={e => this.handleChange(e)}
            />
          </Col>
          <Col md={2} />
        </Row>
        <Row>
          <Col md={2} />
          <Col md={8}>
            <ReactTable
              className="-striped -highlight"
              data={this.state.viewing.times}
              columns={columns}
            />
          </Col>
          <Col md={2} />
        </Row>
      </div>
    );
  }
}

export default Races;
