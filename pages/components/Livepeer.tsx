
import Image from 'next/image';
import * as React from 'react';
import vercel from '../../public/vercel.svg'

const PosterImage = () => {
    return (
        <Image
            src={vercel}
            priority
            alt='image'
        />
    );
};

const playbackId = 'bafybeigtqixg4ywcem3p6sitz55wy6xvnr565s6kuwhznpwjices3mmxoe';

const Livepeer = () => {
    return (<h1>hello</h1>
        // <Player
        //     title="Waterfalls"
        //     playbackId={playbackId}
        //     loop
        //     autoPlay
        //     showTitle={false}
        //     muted
        //     poster={<PosterImage />}
        // />
    );
}

export default Livepeer;