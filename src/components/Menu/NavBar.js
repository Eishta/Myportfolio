import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  state = {}
  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <Menu tabular>
        <Menu.Item
          as={Link} to=''
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={Link} to='projects'
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        >
          Projects
        </Menu.Item>
        <Menu.Item
          as={Link} to='about'
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

      </Menu>
    )
  }
}
export default NavBar