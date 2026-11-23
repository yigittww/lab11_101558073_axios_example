import React, { Component } from 'react';
import axios from 'axios';
import { Container, ListGroup, Image, Spinner, Alert } from 'react-bootstrap';

// PersonList component: fetches a list of people from the Random User API
// using Axios and displays them in a Bootstrap ListGroup.
class PersonList extends Component {
  // Define state default values
  state = {
    persons: [],
    loading: true,
    error: null
  };

  // Component Lifecycle Callback
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
      .then(res => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons, loading: false });
      })
      .catch(err => {
        console.error('Error fetching data: ', err);
        this.setState({ error: 'Failed to fetch data from the API.', loading: false });
      });
  }

  render() {
    const { persons, loading, error } = this.state;

    if (loading) {
      return (
        <Container className="text-center mt-5">
          <Spinner animation="border" role="status" />
          <p className="mt-2">Loading persons...</p>
        </Container>
      );
    }

    if (error) {
      return (
        <Container className="mt-5">
          <Alert variant="danger">{error}</Alert>
        </Container>
      );
    }

    return (
      <Container className="mt-4">
        <h2 className="mb-4 text-center">Person List</h2>
        <ListGroup>
          {persons.map(person => (
            <ListGroup.Item key={person.login.uuid} className="d-flex align-items-center">
              <Image
                src={person.picture.thumbnail}
                roundedCircle
                alt={`${person.name.first} ${person.name.last}`}
                className="me-3"
              />
              <div>
                <strong>{person.name.title} {person.name.first} {person.name.last}</strong>
                <br />
                <span className="text-muted">Email: {person.email}</span>
                <br />
                <span className="text-muted">Phone: {person.phone}</span>
                <br />
                <span className="text-muted">
                  Location: {person.location.city}, {person.location.country}
                </span>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

export default PersonList;
