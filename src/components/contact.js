import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalData: props.data,
      data: props.data.slice(0,5)
    }
  }
  getRandom = () => {
    const dataCopy = this.state.data
    const randomContact = this.state.totalData[Math.floor(Math.random()* this.state.totalData.length)]
    dataCopy.push(randomContact)
    this.setState({data: dataCopy})
  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.getRandom}>Add a random contact</button>
        {
          this.state.data.map((element) => {
            return <table>
                    <tr>
                      <td><img src={element.pictureUrl} alt="actor pic"/> </td>
                      <td>{element.name}</td>
                      <td>{element.popularity}</td>
                    </tr>
                  </table>
          })
        }
      </div>
    )
  }
}

export default Contact