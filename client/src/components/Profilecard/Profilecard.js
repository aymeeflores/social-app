import React from "react";
import Profilepic from "../../assets/Profilepic.jpg";

function Profilecard() {
	return (
		<>
			<div className="bg-white shadow overflow-hidden sm:rounded-lg">
				{/* <div className="px-4 py-5 sm:px-6">
					<h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
					<p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
				</div> */}
				<div className="flex md: flex-wrap justify-center">
					<img src={Profilepic} className="max-w-sm  rounded-2xl m-4  " alt="profile pic " />

					<div>
						<div className="border-t border-gray-200 mt-20 sm:mt-10">
							<dl>
								<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Full name</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Margot Foster</dd>
								</div>
								<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Available</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Sundays</dd>
								</div>
								<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Email address</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">margotfoster@example.com</dd>
								</div>
								<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Field</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Field</dd>
								</div>
								<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Hobbies</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profilecard;
