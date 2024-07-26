type videoprops = {
    url?: string,
    width?: string,
    height?: string,
}

const Video: React.FC<videoprops> = ({url, width, height}) => {
    return (
        <video width={width} height={height} controls autoPlay>
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

export default Video;