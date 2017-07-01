import React, {Component} from 'react';
import TextField from '../TextField/TextField.js';
import './addroute-style.css';


function createFunctionOptions(functionNames) {
  var output = [];
  for (var i = 0; i < functionNames.length; i++) {
    output.push(<option value={functionNames[i]}>{functionNames[i]}</option>);
  }

  return output;
}


function createHTTPOptions() {
  var methods = ['GET', 'POST', 'PUT'];
  var output = [];
  for (var i = 0; i < methods.length; i++) {
    output.push(<option value={methods[i]}>{methods[i]}</option>);
  }

  return output;
}


function DropdownRow(props) {
  return (
    <div className='RouteRow'>
      <h3 className='RouteLabel'>{props.label}</h3>
      <select className='TypeButton'
        name={props.name}
        value={props.value}
        onChange={props.onChange} >
        {props.options}
      </select>
    </div>
  )
}


function TextFieldRow(props) {
  return (
    <div className='RouteRow'>
      <h3 className='RouteLabel'>{props.label}</h3>
      <TextField name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
    </div>
  )
}


class AddRoute extends Component {

  constructor(props) {
    super(props);
    var route = props.route;
    var functionNames = ['editUsername()', 'deleteUser()', 'updateUser()'];
    var httpOptions = createHTTPOptions();
    var functionOptions = createFunctionOptions(functionNames);
    if(route) {
      this.state = {
        endpoint: route.endpoint,
        httpMethod: route.httpMethod,
        object: route.object,
        function: route.function,
        redirect: route.redirect,
        parameters: route.parameters,
        httpOptions: httpOptions,
        functionOptions: functionOptions
      }
    } else {
      this.state = {
          endpoint: '',
          httpMethod: '',
          object: '',
          function: '',
          redirect: '',
          parameters: [],
          httpOptions: httpOptions,
          functionOptions: functionOptions
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log('Name: %s; Value: %s', name, value);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className='AddRouteContainer'>
        <TextFieldRow
          label='Endpoint'
          name='endpoint'
          value={this.state.endpoint}
          placeholder='Ex: /user/update-name'
          onChange={this.handleInputChange}
        />
        <DropdownRow
          label='HTTP Method:'
          name='httpMethod'
          value={this.state.httpMethod}
          onChange={this.handleInputChange}
          options={this.state.httpOptions}
        />
        <DropdownRow
          label='Function:'
          name='function'
          value={this.state.function}
          onChange={this.handleInputChange}
          options={this.state.functionOptions}
        />
        <TextFieldRow
          label='Redirect'
          name='redirect'
          value={this.state.redirect}
          placeholder='Ex: /home'
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
}



export default AddRoute;
