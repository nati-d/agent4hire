"use client";

import {TrendingUp} from "lucide-react";
import {Area, AreaChart, CartesianGrid, XAxis} from "recharts";

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";

const chartData = [
	{month: "January", desktop: 186},
	{month: "February", desktop: 305},
	{month: "March", desktop: 237},
	{month: "April", desktop: 73},
	{month: "May", desktop: 209},
	{month: "June", desktop: 214},
];

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

export function AreaChartGraph() {
	return (
		<div className='flex flex-col md:flex-row gap-4 md:gap-2 items-center  justify-between'>
			<div className='w-[100%] mx-auto px-4'>
				<h1 className='font-bold text-[14px] md:text-[20px]'>Task Completion Rate(%)</h1>
				<ChartContainer
					config={chartConfig}
					className='h-[180px]'
				>
					<AreaChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='month'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator='line' />}
						/>
						<Area
							dataKey='desktop'
							type='natural'
							fill='var(--color-desktop)'
							fillOpacity={0.4}
							stroke='var(--color-desktop)'
						/>
					</AreaChart>
				</ChartContainer>
			</div>
			<div className='w-[100%] mx-auto px-4'>
				<h1 className='font-bold text-[14px] md:text-[20px]'>Hibernation Rate(%)</h1>
				<ChartContainer
					config={chartConfig}
					className='h-[180px]'
				>
					<AreaChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='month'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator='line' />}
						/>
						<Area
							dataKey='desktop'
							type='natural'
							fill='var(--color-desktop)'
							fillOpacity={0.4}
							stroke='var(--color-desktop)'
						/>
					</AreaChart>
				</ChartContainer>
			</div>
		</div>
	);
}
