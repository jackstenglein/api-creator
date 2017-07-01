import React, {Component} from 'react';
import TextField from '../TextField/TextField.js';
import './addobject-style.css';


function AttributeRow(props) {
  return (
    <div>
      <TextField name={props.index} value={props.attributeName} onChange={props.onChange} placeholder='Attribute name'/>
      <select className='TypeButton'
        name={props.attributeName}
        value={props.options.type}


      >
        <option value='string' onChange={props.onChange}>string</option>
        <option value='text' onChange={props.onChange}>text</option>
        <option value='integer' onChange={props.onChange}>integer</option>
        <option value='float'>float</option>
        <option value='date'>date</option>
        <option value='datetime'>datetime</option>
        <option value='boolean'>boolean</option>
        <option value='binary'>binary</option>
        <option value='array'>array</option>
        <option value='json'>json</option>
        <option value='mediumtext'>mediumtext</option>
        <option value='longtext'>longtext</option>
        <option value='objectid'>objectid</option>
      </select>
    </div>
  )
}


function AttributeSection(props) {

  console.log('Attributes: %j', props.attributes);
  var i = -1;
  const attributeSection = props.attributes.map((attribute) => {
      //console.log(props.onChange);
      i++;
      return <AttributeRow
        index={i}
        key={i.toString()}
        attributeName={attribute.name}
        options={attribute.options}
        onChange={props.onChange}
      />
    }
  );

  return (
    <div>{attributeSection}</div>
  )
}

class AddObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objectName: '',
      attributes: [
        {
          name: 'name',
          options: {
            type: 'string'
          }
        },
        {
          name: '',
          options: {
            type: 'boolean'
          }
        }
      ]
    }

    this.handleObjectNameChange = this.handleObjectNameChange.bind(this);
    this.handleAttributeNameChange = this.handleAttributeNameChange.bind(this);
  }

  handleObjectNameChange(event) {
    this.setState({objectName: event.target.value});
  }

  handleAttributeNameChange(event) {
    var attributes = this.state.attributes.slice();
    attributes[event.target.name].name = event.target.value;
    this.setState({attributes: attributes});
  }

  render() {
    return (
      <div className="AddObject">
        <div className='ObjectNameContainer'>
          <h1 className="SectionHeader">Object Name</h1>
          <TextField
            name='objectName'
            value={this.state.objectName}
            placeholder='Ex: User'
            onChange={this.handleObjectNameChange}
          />
        </div>
        <h1 className="SectionHeader">Attributes</h1>
        <AttributeSection attributes={this.state.attributes} onChange={this.handleAttributeNameChange}/>
      </div>
    )
  }
}

export default AddObject;
