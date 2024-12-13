const workstreams = [
	"Develop a scalable architecture for the new project.",
	"Improve collaboration by integrating team feedback processes.",
	"Implement CI/CD pipelines to ensure smooth deployments.",
	"Enhance application performance and reduce load times.",
];

export default function WorkStream() {
	return (
		<div className='w-[100%] mx-auto px-4'>
			<h1 className='font-bold text-[20px]'>Workstream</h1>
			<div className='mt-4 space-y-1'>
				{workstreams.map((workstream, index) => (
					<div
						key={index}
						className={`p-2 md:p-4 rounded-md border w-[100%] border-l-4 border-l-purple-custom`}
					>
						<div className='flex justify-between items-center'></div>
						<p className='text-[12px] md:text-[14px] text-gray-500'>{workstream}</p>
					</div>
				))}
			</div>
		</div>
	);
}
