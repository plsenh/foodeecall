import React from 'react'
import { Container } from '../components/Grid'
import { Jumbotron2 } from '../components/Jumbotron'

export default class Home extends React.Component {
  render () {
    return (
      <Container>
        <Jumbotron2
          headerName='Hot Restaurant'
          lead='We only have 5 tables! Book your seat before they are gone!'
        >
          <div className='text-center'>
            <a href='/tables'>
              <button className='btn btn-lg btn-primary'>
                <span className='fa fa-list-alt' /> View Tables
              </button>
            </a>
            <a href='/reserve'>
              <button className='btn btn-lg btn-danger'>
                <span className='fa fa-credit-card' /> Make Reservation
              </button>
            </a>
          </div>
        </Jumbotron2>
      </Container>
    )
  }
}
