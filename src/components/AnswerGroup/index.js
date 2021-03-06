import React from "react";
import styled from "styled-components";
import { QUIZZES } from "../../constants";
import { Button } from "components";

const AnswerGroupWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 8px;
`;

const AnswerGroup = ({ currentNo, handleClick }) => (
	<AnswerGroupWrapper>
		{QUIZZES[currentNo].answers.map((answer) => (
			<Button key={answer.text} onClick={() => handleClick(answer.isCorrect)}>
				{answer.text}
			</Button>
		))}
	</AnswerGroupWrapper>
);
export default AnswerGroup;
