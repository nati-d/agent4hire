"use client";
import React, {useCallback} from "react";
import {EmblaOptionsType, EmblaCarouselType} from "embla-carousel";

import Autoplay from "embla-carousel-autoplay";
import "./Embla/embla.css";
import useEmblaCarousel from "embla-carousel-react";
import {NextButton, PrevButton, usePrevNextButtons} from "./Embla/EmblaCarouselArrowButtons";
import {TestimonialCard} from "./TestimonialCard";
import {BellElectric, Speaker, SpeakerIcon} from "lucide-react";

const OPTIONS: EmblaOptionsType = {align: "start", dragFree: true, loop: true};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Testimonials = [
	{
		name: "John Doe",
		role: "Project Manager at InnovateTech",
		image: "/placeholder.svg",
		quote: "Integrating AI agents into our Slack workspace has been a game-changer. We've automated repetitive tasks, saving our team hours every week. The platform's ease of use and customizability make it a must-have for any modern business.",
	},
	{
		name: "John Doe",
		role: "Project Manager at InnovateTech",
		image: "/placeholder.svg",
		quote: "Integrating AI agents into our Slack workspace has been a game-changer. We've automated repetitive tasks, saving our team hours every week. The platform's ease of use and customizability make it a must-have for any modern business.",
	},
	{
		name: "John Doe",
		role: "Project Manager at InnovateTech",
		image: "/placeholder.svg",
		quote: "Integrating AI agents into our Slack workspace has been a game-changer. We've automated repetitive tasks, saving our team hours every week. The platform's ease of use and customizability make it a must-have for any modern business.",
	},
	{
		name: "John Doe",
		role: "Project Manager at InnovateTech",
		image: "/placeholder.svg",
		quote: "Integrating AI agents into our Slack workspace has been a game-changer. We've automated repetitive tasks, saving our team hours every week. The platform's ease of use and customizability make it a must-have for any modern business.",
	},
	{
		name: "John Doe",
		role: "Project Manager at InnovateTech",
		image: "/placeholder.svg",
		quote: "Integrating AI agents into our Slack workspace has been a game-changer. We've automated repetitive tasks, saving our team hours every week. The platform's ease of use and customizability make it a must-have for any modern business.",
	},
];

const TestimonialsSection = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()]);

	const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
		const autoplay = emblaApi?.plugins()?.autoplay;
		if (!autoplay) return;

		const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

		resetOrStop();
	}, []);

	const {prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick} = usePrevNextButtons(emblaApi, onNavButtonClick);

	return (
		<section className='embla'>
			<div className='flex flex-col items-center'>
				<div className='py-2 px-4 b-1 border-primary rounded-full w-max flex border gap-4 items-center justify-center '>
					<div className='p-1 rounded-full border flex items-center justify-center border-primary bg-primary'>
						<BellElectric className='h-4 w-4 text-white-a0 ' />
					</div>
					<span className='text-[14px]'>Testimonials</span>
				</div>
				<h1 className='text-[32px] font-semibold'>
					What Our Users Are <span className='text-primary'>Saying</span>
				</h1>
				<p className='text-[14px]'>Hear from businesses and individuals who&apos;ve transformed their workflows with our AI agents.</p>
			</div>
			<div
				className='embla__viewport my-8'
				ref={emblaRef}
			>
				<div className='embla__container space-x-10'>
					{Testimonials.map((testimonial, index) => (
						<TestimonialCard
							key={index}
							name={testimonial.name}
							role={testimonial.role}
							quote={testimonial.quote}
							image={testimonial.image}
						/>
					))}
				</div>
			</div>

			<div className='embla__controls '>
				<div className='embla__buttons'>
					<PrevButton
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
					/>
					<NextButton
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
					/>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
