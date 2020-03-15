import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Summary from "../components/Summary";
import TotalConfirmed from "../components/TotalConfirmed";
import TotalDeaths from "../components/TotalDeaths";
import TotalRecovered from "../components/TotalRecovered";
import AlertDialogSlide from "../components/DialogBox";
import classes from "./Homepage.module.css";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      show: false,
      dataReceived: false,
      countryData: {}
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://us-central1-alex-redwood.cloudfunctions.net/coronavirus-api-master"
      )
      .then(res => {
        this.setState({ data: res.data, dataReceived: true });
      })
      .catch(err => {
        console.log(err);
      });
  }

  checkDataForThisCountry = name => {
    const countryData = this.state.data.breakdown.filter(element => {
      return element.country === name;
    });
    this.setState({ show: true, countryData: countryData[0] });
  };

  closeDialogBox = () => {
    this.setState({ show: false });
  };

  render() {
    let confirmedCasesByCountry = (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ height: "500px" }}
      >
        <Grid item xs={3}>
          <CircularProgress />
        </Grid>
      </Grid>
    );
    let totalDeathsByCountrySorted = (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ height: "770px" }}
      >
        <Grid item xs={3}>
          <CircularProgress />
        </Grid>
      </Grid>
    );
    let totalRecoveredByCountrySorted = (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ height: "770px" }}
      >
        <Grid item xs={3}>
          <CircularProgress />
        </Grid>
      </Grid>
    );
    let summary = (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ height: "200px" }}
      >
        <Grid item xs={3}>
          <CircularProgress />
        </Grid>
      </Grid>
    );

    if (this.state.dataReceived === true) {
      summary = <Summary summary={this.state.data.summary}></Summary>;

      confirmedCasesByCountry = [...this.state.data.breakdown];
      confirmedCasesByCountry = confirmedCasesByCountry
        .slice(0, 20)
        .map(country => {
          return (
            <TotalConfirmed
              key={country.country}
              clicked={() => this.checkDataForThisCountry(country.country)}
              name={country.country}
              totalCases={country.totalCases}
            ></TotalConfirmed>
          );
        });

      totalDeathsByCountrySorted = [...this.state.data.breakdown];
      totalDeathsByCountrySorted = totalDeathsByCountrySorted
        .sort((a, b) => parseFloat(b.totalDeaths) - parseFloat(a.totalDeaths))
        .slice(1, 30)
        .map(country => {
          return (
            <TotalDeaths
            clicked={() => this.checkDataForThisCountry(country.country)}
              name={country.country}
              totalDeaths={country.totalDeaths}
            ></TotalDeaths>
          );
        });

      totalRecoveredByCountrySorted = [...this.state.data.breakdown];
      totalRecoveredByCountrySorted = totalRecoveredByCountrySorted
        .sort(
          (a, b) => parseFloat(b.totalRecovered) - parseFloat(a.totalRecovered)
        )
        .slice(1, 30)
        .map(country => {
          return (
            <TotalRecovered
            clicked={() => this.checkDataForThisCountry(country.country)}
              name={country.country}
              totalRecovered={country.totalRecovered}
            ></TotalRecovered>
          );
        });
    }

    return (
      <div>
        <Grid container style={{ flexGrow: "1" }} spacing={2}>
          <Grid
            style={{
              backgroundColor: "#777B88",
              margin: "20px auto",
              padding: "20px"
            }}
            items
            xs={10}
          >
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <p style={{ marginRight: "50px", color: "white" }}>
                Special Thanks to{" "}
                <strong>www.worldometers.info/coronavirus/</strong> for
                providing the data!
              </p>
              <Button
                href="https://www.heraldsun.com.au/lifestyle/health/coronavirus-survival-guide-how-to-protect-yourself/news-story/2cdefa3c0ccdf5e4972c44177c925505"
                style={{ marginRight: "20px" }}
                size="large"
                variant="contained"
                color="primary"
                target="_blank"
              >
                Survival Guide
              </Button>
              <Button
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                style={{ marginRight: "20px" }}
                size="large"
                variant="contained"
                color="primary"
                target="_blank"
              >
                Latest News
              </Button>
              <Button
                href="https://people.com/health/coronavirus-ways-to-help-your-community/"
                style={{ marginRight: "20px" }}
                size="large"
                variant="contained"
                color="primary"
                target="_blank"
              >
                Help your community
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={3}>
              <Grid item>
                <Paper
                  style={{ backgroundColor: "#330033", color: "white" }}
                  className={classes.PaperSummary}
                  elevation={3}
                >
                  <h3>Summary</h3>
                  {summary}
                </Paper>
                <Paper
                  className={classes.Paper}
                  style={{ backgroundColor: "#330033", color: "white" }}
                  elevation={3}
                >
                  <h3>Confirmed cases:</h3>
                  <ul
                    style={{
                      listStyleType: "none",
                      margin: "auto",
                      padding: "0",
                      color: "white"
                    }}
                  >
                    {confirmedCasesByCountry}
                  </ul>
                </Paper>
              </Grid>

              <Grid item>
                <Paper
                  style={{ backgroundColor: "#330033" }}
                  className={classes.PaperRight}
                  elevation={3}
                >
                  <ul
                    style={{
                      listStyleType: "none",
                      margin: "auto",
                      padding: "0",
                      color: "white"
                    }}
                  >
                    <h3>Total Deaths:</h3>
                    {totalDeathsByCountrySorted}
                  </ul>
                </Paper>
              </Grid>

              <Grid item>
                <Paper
                  style={{ backgroundColor: "#330033", color: "white" }}
                  className={classes.PaperRight}
                  elevation={3}
                >
                  <h3 style={{ color: "#80ff00" }}>Total Recovered:</h3>
                  <ul
                    style={{
                      listStyleType: "none",
                      margin: "auto",
                      padding: "0",
                      color: "white"
                    }}
                  >
                    {totalRecoveredByCountrySorted}
                  </ul>
                </Paper>
              </Grid>
              <AlertDialogSlide
                close={this.closeDialogBox}
                test={this.state.show}
                data={this.state.countryData}
              ></AlertDialogSlide>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
