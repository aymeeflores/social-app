import React from "react";

function Feed() {
	return (
		<>
			<div className="p-5 max-w-lg border-solid border-2 border-gray-600 rounded-lg ml-auto mr-auto ">
				<div className="flex">
					<img className=" w-12 rounded-full " src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
					<div className="flex flex-wrap w-full pl-3">
						<div className="w-full">name</div>
						<div className="w-full">date</div>
					</div>
				</div>
				<div className="p-2">status posted</div>
				<div className=" flex justify-between flex-nowrap">
					<div></div>
					<div>status likes</div>
				</div>
				<div>comment posted by other users</div>
				<div className="pt-3">
					{/* <label htmlFor="post comment" className="block text-sm font-medium text-gray-700 pt-2">
						post comment
					</label> */}
					<div className="mt-1 relative rounded-md shadow-sm">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<span className="text-gray-500 sm:text-sm"></span>
						</div>
						<input type="text" name="comment" id="comment" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="comment" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Feed;
