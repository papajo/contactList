var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AddForm = React.createClass({
	render: function(){
		return(
			<div className="well">
				<h3>Add Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" ref="name" className="form-control" placeholder="Add Name..." />
                        <input type="text" ref="phone" className="form-control" placeholder="Add Phone..." />
                        <input type="text" ref="email" className="form-control" placeholder="Add Email..." />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
			</div>
		);
	},
    handleSubmit: function(e) {
        e.preventDefault();
        var contact = {
            name: this.refs.name.value.trim(),
            name: this.refs.phone.value.trim(),
            name: this.refs.email.value.trim()
        }
        AppActions.saveContact(contact);
    }
});

module.exports = AddForm;