import React from 'react'
import { Nav, NavItem, Navbar, MenuItem } from 'react-bootstrap'
import localStyles from './PageHeader.css'

const PageHeader = () => 
	<Navbar inverse collapseOnSelect fixedTop className={localStyles.navBar}>
		<Navbar.Header>
			<Navbar.Brand>
				<a>Mukesh Kumar Kharita</a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav pullRight>
				<NavItem eventKey={1} href="#about" className={localStyles.navItem}>
					About
				</NavItem>
				<NavItem eventKey={2} href="#" className={localStyles.navItem}>
					Resume
				</NavItem>
				<NavItem eventKey={2} href="#" className={localStyles.navItem}>
					Achievements
				</NavItem>
				<NavItem eventKey={2} href="#" className={localStyles.navItem}>
					Projects
				</NavItem>
				<NavItem eventKey={2} href="#" className={localStyles.navItem}>
					Contact
				</NavItem>
			</Nav>
		</Navbar.Collapse>
		</Navbar>

export default PageHeader