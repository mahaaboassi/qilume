export const Video = () => {
    return (
        <div className="px-5 py-5 lg:px-32 lg:py-20">
            <p className="text-center font-bold text-istok text-xl mb-5 lg:mb-10 lg:text-3xl">Video</p>
            <iframe
                src="https://www.youtube.com/embed/elE50fXfJms?controls=0&modestbranding=1&rel=0&showinfo=0"
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full lg:h-[800px]"
            ></iframe>
        </div>
    )
}