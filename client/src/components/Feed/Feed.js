import React from "react";

function Feed() {
	return (
		<>
			<div className="p-10">
				<div className="flex">
					<img className=" w-12 rounded-full " src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
					<div className="flex flex-wrap w-full pl-3">
						<div className="w-full">name</div>
						<div className="w-full">date</div>
					</div>
				</div>
				<div className=" flex justify-between flex-nowrap">
					<div>comment</div>
					<div>comment count</div>
				</div>
			</div>
		</>
	);
}

export default Feed;
