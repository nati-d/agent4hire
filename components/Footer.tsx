import Link from "next/link";
import Image from "next/image";
import {Facebook, Twitter, Instagram, Linkedin, Youtube} from "lucide-react";

export default function Footer() {
	return (
		<footer className='w-full py-12 bg-white-a0'>
			<div className='container px-4 mx-auto'>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5'>
					{/* Logo and Social Section */}
					<div className='lg:col-span-1'>
						<Image
							src='/images/logo-large.png'
							alt='Agents 4 Hire'
							width={150}
							height={40}
							className='mb-4'
						/>
						<p className='mb-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
						<div className='flex space-x-4'>
							<Link
								href='#'
								className='text-gray-600 hover:text-primary'
							>
								<Facebook className='w-5 h-5' />
							</Link>
							<Link
								href='#'
								className='text-gray-600 hover:text-primary'
							>
								<Twitter className='w-5 h-5' />
							</Link>
							<Link
								href='#'
								className='text-gray-600 hover:text-primary'
							>
								<Instagram className='w-5 h-5' />
							</Link>
							<Link
								href='#'
								className='text-gray-600 hover:text-primary'
							>
								<Linkedin className='w-5 h-5' />
							</Link>
							<Link
								href='#'
								className='text-gray-600 hover:text-primary'
							>
								<Youtube className='w-5 h-5' />
							</Link>
						</div>
					</div>

					{/* Product Section */}
					<div>
						<h3 className='mb-4 text-lg font-semibold text-primary'>Product</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='#'
									className='text-gray-600 hover:text-primary'
								>
									Features
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-600 hover:text-primary'
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-600 hover:text-primary'
								>
									Case studies
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-600 hover:text-primary'
								>
									Reviews
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-600 hover:text-primary'
								>
									Updates
								</Link>
							</li>
						</ul>
					</div>

					{/* Company Section */}
					<div>
						<h3 className='mb-4 text-lg font-semibold text-primary'>Company</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='#'
									className='text-gray-600 hover:text-primary'
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-600 hover:text-primary'
								>
									Contact us
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-600 hover:text-primary'
								>
									Careers
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-600 hover:text-primary'
								>
									Culture
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-600 hover:text-primary'
								>
									Blog
								</Link>
							</li>
						</ul>
					</div>

					{/* Support Section */}
					<div>
						<h3 className='mb-4 text-lg font-semibold text-primary'>Support</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='#'
									className='text-gray-600 hover:text-primary'
								>
									Getting started
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-600 hover:text-primary'
								>
									Help center
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-600 hover:text-primary'
								>
									Server status
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-600 hover:text-primary'
								>
									Report a bug
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-600 hover:text-primary'
								>
									Chat support
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Section */}
					<div>
						<h3 className='mb-4 text-lg font-semibold text-primary'>Contacts us</h3>
						<ul className='space-y-2'>
							<li className='flex items-center text-gray-600'>
								<span className='mr-2'>✉️</span>
								contact@company.com
							</li>
							<li className='flex items-center text-gray-600'>
								<span className='mr-2'>📞</span>
								0949719011
							</li>
							<li className='flex items-center text-gray-600'>
								<span className='mr-2'>📍</span>
								San Francisco, 94102
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='flex flex-col justify-between pt-8 mt-8 border-t border-gray-200 sm:flex-row'>
					<p className='text-gray-600'>Copyright © 2024 Agents4Hire</p>
					<div className='flex space-x-4'>
						<p className='text-gray-600'>All Rights Reserved |</p>
						<Link
							href='#'
							className='text-primary hover:underline'
						>
							Terms and Conditions
						</Link>
						<span className='text-gray-600'>|</span>
						<Link
							href='#'
							className='text-primary hover:underline'
						>
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
