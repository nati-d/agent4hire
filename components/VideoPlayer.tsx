"use client";
import {Play} from "lucide-react";
import React, {useState} from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
	const [playing, setPlaying] = useState(false);

	const handlePlay = () => {
		setPlaying(true);
	};

	return (
		<div className='max-w-[1200px] h-[80dvh] p-2 gradient rounded-md relative'>
			<div className='w-full h-full p-2 bg-black relative'>
				{!playing && (
					<div className='absolute h-full w-full flex items-center justify-center'>
						<div className='bg-gray-200 rounded-full p-1'>
							<div className='gradient p-1 rounded-full'>
								<button
									onClick={handlePlay}
									className='inset-0 flex items-center justify-center gap-4 text-black bg-white-a0 py-2 px-4 rounded-full'
								>
									<Play className='w-4 h-4 text-primary' />
									Watch Demo
								</button>
							</div>
						</div>
					</div>
				)}
				<ReactPlayer
					url='https://youtu.be/k-o6elGNLqQ?si=7iJqRZxrnz0_QHor'
					controls
					width='100%'
					height='100%'
					playing={playing}
					onPlay={handlePlay}
				/>
			</div>
		</div>
	);
};

export default VideoPlayer;