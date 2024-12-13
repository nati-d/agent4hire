import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {BarChart3, Brain, Clock, Eye, MessageSquare, Zap} from "lucide-react";

export default function Metric() {
	return (
		<Card className='w-full max-w-md'>
			<CardHeader>
				<CardTitle className='text-left text-2xl font-bold text-primary'>Metrics</CardTitle>
			</CardHeader>
			<CardContent className=''>
				{/* Title on the left side */}

				{/* AI Metric Types */}
				<div className='grid grid-cols-2 gap-4 '>
					<MetricTypeCard
						icon={BarChart3}
						title='Performance Metrics'
						number='1'
					/>
					<MetricTypeCard
						icon={Clock}
						title='Efficiency Metrics'
						number='2'
					/>
					<MetricTypeCard
						icon={Brain}
						title='Learning Metrics'
						number='3'
					/>
					<MetricTypeCard
						icon={Eye}
						title='Perception Metrics'
						number='4'
					/>
					<MetricTypeCard
						icon={MessageSquare}
						title='NLP Metrics'
						number='5'
					/>
					<MetricTypeCard
						icon={Zap}
						title='Real-time Metrics'
						number='6'
					/>
				</div>
			</CardContent>
		</Card>
	);
}

function MetricTypeCard({icon: Icon, title, number}: {icon: React.ElementType; title: string; number: string}) {
	return (
		<Card>
			<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
				<CardTitle className='font-medium text-sm text-gray-600'>{title}</CardTitle>
				<Icon className='h-4 w-4 text-muted-foreground' />
			</CardHeader>
			<CardContent>
				<div className='text-xl font-bold'>{number}</div>
			</CardContent>
		</Card>
	);
}
