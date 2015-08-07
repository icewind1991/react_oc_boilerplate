import React, {Component} from 'react/addons';

import {SideBar, Entry, Separator, App, Content, TopBar} from 'oc-react-components';

export class Page extends Component {
	state = {
		page: 'home'
	};

	onClick (page) {
		this.setState({
			page: page
		});
	}

	render () {
		return (
			<App appId="react_oc_boilerplate">
				<SideBar withIcon={true}>
					<Entry icon="home" onClick={this.onClick.bind(this,'home')}>Entry1</Entry>
					<Entry icon="link" onClick={this.onClick.bind(this,'link')}>Entry2</Entry>
					<Separator/>
					<Entry icon="folder"
						   onClick={this.onClick.bind(this,'folder')}>Entry3</Entry>
					<Entry icon="user" onClick={this.onClick.bind(this,'user')}>Entry4</Entry>
				</SideBar>

				<TopBar>
					<input type="text" placeholder="foo"/>
				</TopBar>

				<Content>
					<h1>{this.state.page}</h1>
				</Content>
			</App>
		);
	}
}
