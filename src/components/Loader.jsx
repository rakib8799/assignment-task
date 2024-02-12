import '@dotlottie/player-component';

const Loader = () => {
    return (
        <>
            <dotlottie-player
                autoplay
                loop
                playMode="normal"
                src="https://lottie.host/90a22802-b327-4302-8288-251cda899d3b/cjaxFa9V9a.json"
                style={{ width: '320px' }}
            >
            </dotlottie-player>
        </>
    )
}

export default Loader