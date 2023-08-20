import React from 'react'
import { Row } from 'react-bootstrap'

import Contact from './Contact'
import localStyles from './Contacts.css'

const Contacts = () =>
	<div className={localStyles.contactsContainer} id="contact">
		<div className={localStyles.contactText}>
			Contacts
		</div>
		<div className={localStyles.seperator}/>
		<Row className={localStyles.contacts}>
			<Contact
				type={'Address'}
				icon={"map-marker"}
				line1={"VBH"}
				line2={"NIT Hamirpur"}
			/>
			<Contact
				type={'Email'}
				icon={"envelope"}
				line1={"mukeshnithcse@gmail.com"}
				line2={"http://mukeshkharita.github.io"}
				link1
				link2
			/>
		</Row>
	</div>

export default Contacts