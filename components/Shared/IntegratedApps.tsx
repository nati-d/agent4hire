import React from "react";

type IntegratedAppsProps = {
    availableApis: string[];
};

const IntegratedApps = ({availableApis}:IntegratedAppsProps) => {
	return (
		<div>
			<h1 className='font-semibold text-[14px] mb-2'>Integrations</h1>
			<div className='flex flex-wrap items-center px-2 gap-2'>
				{availableApis &&
					availableApis.map((api, idx) => (
						<div key={idx} className='bg-purple-custom px-4 py-1 text-[12px] rounded-full border border-gray-600 text-gray-600'>{api}</div>
					))}
			</div>
		</div>
	);
};

export default IntegratedApps;
