import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

class Menu extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        menu: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            func: PropTypes.func,
        })),
    };
    static defaultProps = {
        menu: []
    };

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                isOpen: !prevState.isOpen
            }
        });
    }

    render() {
        const { title, menu } = this.props;
        console.log(menu);

        return (
            <div>
                <Navbar color="dark" dark expand="md" className="pr-0 pl-0">
                    <NavbarBrand>{title}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {menu.map((menuName, ind) =>
                                <NavItem key={ind}><div className="nav-link" onClick={menuName.func}>{menuName.text}</div></NavItem>)
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menu;