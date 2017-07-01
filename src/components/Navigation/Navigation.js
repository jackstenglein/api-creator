import React, {Component} from 'react';
import './navigation-style.css'


function MenuButton(props) {
  return (
    <div className='MenuButton'>
      {props.title}
      <hr />
    </div>

  )
}

function Menu(props) {
  console.log(props.options);
  const menu = props.options.map((title) =>
    <MenuButton title={title} />
  );

  return (
    <div className='Menu'>
      {menu}
    </div>
  );
}

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu
        options={['Objects', 'Routes', 'Functions', 'Policies']}
      />
    )
  }
}

export default Navigation;
