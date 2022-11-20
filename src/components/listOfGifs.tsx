import { useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import Gif from './Gif';

export default function ListOfGifs({ params }: { keyword: string }) {
  const [gifs, setGifs] = useState([]);
  const { keyword } = params;

  useEffect(
    function () {
      getGifs({ keyword }).then((gifs) => setGifs(gifs));
    },
    [keyword]
  );

  return (
    <div>
      {gifs.map(({ title, id, url }) => (
        <Gif title={title} id={id} url={url} key={id} />
      ))}
    </div>
  );
}
