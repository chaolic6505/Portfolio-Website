import './SkillBar.css';

export const SkillBar = ({
	HTML,
	React,
	SQL,
	Python,
	RN,
	JQ,
	PHP,
	C,
	AV,
	Java,
}) => {
	return (
		<div class="contentContainer">
			<div class="skillBar">
				<h4>{HTML}</h4>
				<div class="skillBarContainer">
					<div class="skillBarValue value-100"></div>
				</div>
			</div>
			<div class="skillBar">
				<h4>{React}</h4>
				<div class="skillBarContainer">
					<div class="skillBarValue value-100"></div>
				</div>
			</div>

			<div class="skillBar">
				<h4>{SQL}</h4>
				<div class="skillBarContainer">
					<div class="skillBarValue value-100"></div>
				</div>
			</div>

			<div class="skillBar">
				<h4>{Python}</h4>
				<div class="skillBarContainer">
					<div class="skillBarValue value-95"></div>
				</div>
			</div>

			<div class="skillBar">
				<h4>{RN}</h4>
				<div class="skillBarContainer">
					<div class="skillBarValue value-90"></div>
				</div>
			</div>

			<div class="skillBar">
				<h4>{JQ}</h4>
				<div class="skillBarContainer">
					<div class="skillBarValue value-80"></div>
				</div>
			</div>

			<div class="skillBar">
				<h4>{PHP}</h4>
				<div class="skillBarContainer">
					<div class="skillBarValue value-80"></div>
				</div>
			</div>
			<div class="skillBar">
				<h4>{C}</h4>
				<div class="skillBarContainer">
					<div class="skillBarValue value-70"></div>
				</div>
			</div>
			<div class="skillBar">
				<h4>{AV} </h4>
				<div class="skillBarContainer">
					<div class="skillBarValue value-70"></div>
				</div>
			</div>

			<div class="skillBar">
				<h4>{Java}</h4>
				<div class="skillBarContainer">
					<div class="skillBarValue value-30"></div>
				</div>
			</div>
		</div>
	);
};
