import React from 'react';

// this is an object literal.. parenthesis wrapper with =>
const ContestPreview = (contest) => (
	<div>
		<div className="category-name">
			{contest.categoryName}
		</div>
		<div className="contest-name">
			{contest.contestName}
		</div>
	</div>
);

export default ContestPreview;
