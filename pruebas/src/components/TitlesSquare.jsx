import '../styles/TitlesSquare.css'

function TitlesSquare() {
    return (
        <>
            <div className="title-square-container">
                <div className="left-news">
                    <h2 className='text-news-title'>Ultimas Noticias</h2>
                    <p className='text-news'> <strong>Contrary to:</strong> Popular belief, Lorem Ipsum is not simply random text.</p>
                    <p className='text-news'> <strong>It has roots:</strong> is not simply random text. It has roots in a piece.</p>
                    <p className='text-news'> <strong>It has roots:</strong> In a piece. Lorem Ipsum is not simply random text.</p>
                </div>
                <div className="middle-line"></div>
                <div className="middle-news">
                    <p className='text-news'><strong>Contrary to:</strong> Popular belief, Lorem Ipsum is not simply random text.</p>
                    <p className='text-news'><strong>Lorem Ipsum:</strong> is not simply random text. It has roots in a piece.</p>
                    <p className='text-news'><strong>It has roots:</strong> in a piece. Lorem Ipsum is not simply random text.</p>
                </div>
                <div className="middle-line"></div>
                <div className="right-news">
                    <p className='text-news'><strong>Contrary to:</strong> Popular belief, Lorem Ipsum is not simply random text.</p>
                    <p className='text-news'><strong>Lorem Ipsum:</strong> Is not simply random text. It has roots in a piece.</p>
                    <p className='text-news'><strong>It has roots:</strong> In a piece. Lorem Ipsum is not simply random text.</p>
                </div>
            </div>

        </>
    )
}

export default TitlesSquare;