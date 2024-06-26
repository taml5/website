import './App.css';
import Title from './Title.jsx';
import Description from './Description.jsx';
import ProjectContainer from './ProjectContainer.jsx';
import { blurb, socials, projects } from './data';

function App() {
	return (
	<>
	<Title/>
	<hr/>
	<Description
		blurb={blurb}
		socials={socials}
	/>
	<div className="projects">
		<h1>Projects</h1>
		<ProjectContainer
			projects={projects}
		/>
	</div>
	<p id="updateTag">Last updated May 2024</p>
	</>
	);
}

export default App
