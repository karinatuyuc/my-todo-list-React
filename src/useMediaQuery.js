import {useState, useEffect} from 'react';

 function useMediaQuery(query){ //Recibe a param: text for the mediaquery condition
    const [matches, setMatches] = useState(false);


    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const listener = (e) => setMatches(e.matches);

        setMatches(mediaQueryList.matches)

        mediaQueryList.addEventListener('change', listener);


        return () => {
            mediaQueryList.removeEventListener('change', listener);
        };

        

    }, [query])

    return matches;

};

export default useMediaQuery;