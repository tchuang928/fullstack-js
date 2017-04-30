import React from 'react';

// this is an object literal.. parenthesis wrapper with =>
const ContestPreview = (contest) => (
	<div>
		<div>
			{contest.categoryName}
		</div>
		<div>
			{contest.contestName}
		</div>
	</div>
);

export default ContestPreview;
