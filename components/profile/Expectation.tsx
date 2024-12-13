import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function Expectation() {
	const expectations = [
		"Attend all scheduled meetings",
		"Complete assigned tasks on time",
		"Collaborate effectively with team members",
		"Maintain open communication",
		"Adhere to company policies and procedures",
	];

	return (
		<div className='w-[100%] mx-auto px-4'>
			<h1 className='font-bold text-[20px]'>Expectations</h1>
			<div className='mt-4 space-y-1'>
				{expectations.map((expectation, index) => (
					<div className={`p-2 md:p-4 rounded-md border w-[100%] border-l-4 border-l-purple-custom`}>
						<div className='flex justify-between items-center'>
						</div>
						<p className='text-[12px] md:text-[14px] text-gray-500'>{expectation}</p>
					</div>
				))}
			</div>
		</div>
	);
}
