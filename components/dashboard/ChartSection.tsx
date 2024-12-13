import {Card, CardContent} from "@/components/ui/card";
import PieChart from "@/graphs/PieChart";
import BarChart from "@/graphs/BarChart";
import LineChart from "@/graphs/LineChart";
import StackedBarChart from "@/graphs/StackedBarChart";
import SoftwareAd from "./SoftwareAd";

const sampleSoftware = {
	name: "Agent 4 Hire",
	description: "Hire smart AI agents to boost productivity and automate tasks.",
	features: ["Custom AI solutions", "Task automation", "Smart interactions", "Secure and reliable"],
	ctaText: "Get Your AI Agent",
};

type ChartType = "pie_chart" | "bar_chart" | "stacked_bar_chart" | "line_chart";

interface Chart {
	id: string;
	type: ChartType;
	title: string;
}

interface ChartComponentProps {
	type: ChartType;
	title: string;
}

const ChartComponent: React.FC<ChartComponentProps> = ({type, title}) => {
	switch (type) {
		case "pie_chart":
			return <PieChart title={title} />;
		case "bar_chart":
			return <BarChart />;
		case "stacked_bar_chart":
			return <StackedBarChart />;
		case "line_chart":
			return <LineChart />;
		default:
			return null;
	}
};

interface ChartSectionProps {
	charts: Chart[];
}

export default function ChartSection({charts}: ChartSectionProps) {
	const chartRemainder = charts.length % 3;
	const placeholders = chartRemainder > 0 ? 3 - chartRemainder : 0;

	return (
		<div className='grid grid-cols-3 gap-4 my-4'>
			{charts.map((chart) => (
				<Card key={chart.id}>
					<CardContent className='p-4'>
						<ChartComponent
							type={chart.type}
							title={chart.title}
						/>
					</CardContent>
				</Card>
			))}
			{Array.from({length: placeholders}).map((_, index) => (
				<SoftwareAd key={index} software={sampleSoftware} />
			))}
		</div>
	);
}
