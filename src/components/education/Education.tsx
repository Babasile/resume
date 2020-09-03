import React from "react";
import Container from "react-bootstrap/Container";
import TimelineItem from "../commons/timelineItem";
import { Education } from "../../interfaces/Education.interface";

interface Props {
	educations: Array<Education>;
}

function Educations(props: Props) {
	const { educations } = props;
	const list = educations.map((education, i) => (
		<TimelineItem
			key={i}
			title={education.diploma}
			name={education.school}
			city={education.city}
			startDate={new Date(education.startDate)}
			endDate={new Date(education.endDate)}
			current={education.current}
			formatDate={false}
			details={education.courses}
			keywords={education.keywords}
		/>
	));
	return (
		<div id="educations" className="bg-light">
			<Container className="py-5">
				<h2 className="text-center display-4">Formations</h2>
				<hr />
				<div className="row mt-4">
					<div className="col-md-10 mx-auto">
						<div className="timeline">{list}</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Educations;
