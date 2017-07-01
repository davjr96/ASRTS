import React, { Component } from "react";
import { Row, Col, Well } from "react-bootstrap";
import "./App.css";
import "whatwg-fetch";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selected: 0,
      viewing: {}
    };
  }

  componentDidMount() {
    fetch("/api/live")
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        this.setState({
          data: json
        });
      })
      .catch(function(ex) {
        console.log("parsing failed", ex);
      });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const columns = [
      {
        Header: "Name",
        accessor: "racer"
      },
      {
        Header: "Time",
        accessor: "time"
      }
    ];

    return (
      <div className="Home">
        <Row>
          <Col md={2} />
          <Col md={8}>
            <Well>
              Welcome to the Virginia Alpine Ski and Snowboard Team timing
              Website. Here you can find times from past races, as well as live
              times during our team practices at Wintergreen Resort.
            </Well>
          </Col>
          <Col md={2} />
        </Row>
        <Row>
          <Col md={2} />
          <Col md={8}>
            <Well>
              <Row>
                <h2>Live Practice Times</h2>
              </Row>
              <Row>
                <ReactTable
                  className="-striped -highlight"
                  data={this.state.data}
                  columns={columns}
                />
              </Row>
            </Well>
          </Col>
          <Col md={2} />
        </Row>
      </div>
    );
  }
}

export default Home;
