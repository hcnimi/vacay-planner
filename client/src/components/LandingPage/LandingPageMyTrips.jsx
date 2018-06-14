import React from 'react';
import { Card, Grid, Form, Button, Segment, Header } from 'semantic-ui-react';
import MomentLocaleUtils, {formatDate, parseDate} from 'react-day-picker/moment';
import MyTripsEntry from './MyTripsEntry.jsx';

const LandingPageMyTrips = (props) => {
  return (
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 450}}>
        <Card centered fluid>
          <Card.Content header='Upcoming Trips'/>
          <Card.Content>
            {props.trips.map((trip, i) => {
              return(<MyTripsEntry trip={trip} key={i}/>);
            })}
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  );
}

export default LandingPageMyTrips;