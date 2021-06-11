import React              from 'react';
import BasePanel          from '@/containers/BasePanel';
import BaseFormComponent  from '@/formcomponents/BaseFormComponent';

class FormSelect extends BaseFormComponent{
	constructor(props) {
		super(props);
		this.state = {value: this.props.defaultValue};
		this.options = this.props.options ? this.props.options : [];

		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		this.setState({value: event.target.value});
		if(this.props.onChange) {
			this.props.onChange(event.target.value);
		}
	}

	setValue(value) {
		this.setState({value: value});
	}

	render() {
		return (
			<div className="form-input-container">
				<select
					ref={this.input}
					className="select-css"
					placeholder={this.props.placeholder}
					type="text"
					onChange={this.onChange}
					value={this.state.value}
				>
				<option key={Math.random()} value={""}>---</option>
				{
					(this.options).map((item, e) => {
						return <option key={Math.random()} value={item.value}>{item.label}</option>
					})
				}
				</select>
			</div>
		);
	}
}

export default FormSelect;
