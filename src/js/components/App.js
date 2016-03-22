var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./AddForm.js');
var EditForm = require('./Editform.js');
var ContactList = require('./ContactList.js');

function getAppState(){
	return {
        contacts: AppStore.getContacts()
        contactToEdit: getContactToEdit()
	}
}

var App = React.createClass({
	getInitialState: function(){
		return getAppState();
	},

	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},

	render: function(){
        //console.log(this.state.contactToEdit);
        if(this.state.contactToEdit == '') {
            var form = <Addform />
        } else {
            var form = <EditForm contactToEdit={this.state.contactToEdit}/>
        }
		return(
			<div>
				{form}
                <ContactList contacts={this.state.contacts}/>
			</div>
		);
	},

	// Update view state when change is received
	_onChange: function(){
		this.setState(getAppState());
	}
});

module.exports = App;