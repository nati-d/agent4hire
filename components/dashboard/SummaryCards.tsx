import {DollarSign, User, TrendingUp, Activity} from "lucide-react";

type SummaryCardProps = {
	icon: React.ElementType;
	label: string;
	value: string;
	isHighlight?: boolean;
};

const SummaryCard = ({icon: Icon, label, value, isHighlight = false}: SummaryCardProps) => (
	<div className={`flex items-center gap-4 rounded-md px-4 py-2 border shadow-sm ${isHighlight ? "text-white-a0 bg-primary-100" : "bg-white-a0"}`}>
		<div>
			<Icon />
		</div>
		<div>
			<span className={`text-[10px] ${isHighlight ? "text-white-a20" : "text-gray-400"}`}>{label}</span>
			<h1 className='font-bold text-[20px]'>{value}</h1>
		</div>
	</div>
);

export default function SummaryCards() {
	return (
		<div className='grid grid-cols-4 gap-2'>
			<SummaryCard
				icon={DollarSign}
				label='Total Conversion Rate'
				value='15.2%'
			/>
			<SummaryCard
				icon={User}
				label='Total Visitors'
				value='2.5k'
			/>
			<SummaryCard
				icon={TrendingUp}
				label='Total Revenue'
				value='$32.4k'
			/>
			<SummaryCard
				icon={Activity}
				label='Active Users'
				value='1.2k'
				isHighlight
			/>
		</div>
	);
}
