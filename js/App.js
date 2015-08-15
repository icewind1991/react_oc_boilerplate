import {Component} from 'react/addons';

import {SideBar, Entry, Separator, App as AppContainer, Content, ControlBar} from 'oc-react-components';

import style from '../css/app.css';

export class App extends Component {
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
			<AppContainer appId="react_oc_boilerplate">
				<SideBar withIcon={true}>
					<Entry key={1} icon="home"
						   onClick={this.onClick.bind(this,'home')}>Entry1</Entry>
					<Entry key={2} icon="link"
						   onClick={this.onClick.bind(this,'link')}>Entry2</Entry>
					<Separator/>
					<Entry key={3} icon="folder"
						   onClick={this.onClick.bind(this,'folder')}>Entry3</Entry>
					<Entry key={4} icon="user"
						   onClick={this.onClick.bind(this,'user')}>Entry4</Entry>
				</SideBar>

				<ControlBar>
					<input type="text" placeholder="foo"/>
				</ControlBar>

				<Content>
					<h1 className={style.header}>{this.state.page}</h1>

					<p>Content...</p>
				</Content>
			</AppContainer>
		);
	}
}
