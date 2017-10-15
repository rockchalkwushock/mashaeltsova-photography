import { Component } from 'react'
import { WithData } from '../lib'
import { FormContainer } from '../containers'

class TestPage extends Component {
  render() {
    return <FormContainer />
  }
}

export default WithData(TestPage)
