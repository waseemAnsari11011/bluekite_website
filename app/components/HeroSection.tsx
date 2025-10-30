import React from "react";
import Image from "next/image";

// We can define the SVG icon right in the component
const ChevronDownIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 animate-bounce" // Added a bounce animation
  >
    <path
      d="M19.5 9L12 16.5L4.5 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for iOS
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        {/* === ACTION REQUIRED === */}
        {/* Add your video to /public/videos/bluekite-bg.mp4 */}
        <source src="/videos/bluekite-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      {/* This overlay makes the white text readable on top of the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen container mx-auto px-6 text-center">
        {/* Logo Text */}
        <div className="text-5xl font-extrabold mb-4">bluekite</div>
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Your favorite fast food, delivered.
        </h1>
        {/* Sub-headline */}
        <p className="mt-4 text-lg text-gray-200 max-w-xl mx-auto">
          Experience fast & easy online ordering on the bluekite app.
        </p>{" "}
        {/* <-- THIS WAS THE LINE WITH THE ERROR. It is now fixed. */}
        {/* App Store Badges */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* === ACTION REQUIRED === */}
          {/* Add your badge images to /public/images/ */}

          {/* Google Play */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/google-play.png" // Replace with your image
              alt="Get it on Google Play"
              width={180}
              height={54}
              className="h-auto"
            />
          </a>

          {/* Apple App Store */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/app-store.svg" // Replace with your image
              alt="Download on the App Store"
              width={160}
              height={54}
              className="h-auto"
            />
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-sm text-gray-200">
        Scroll down
        <ChevronDownIcon />
      </div>
    </section>
  );
}
