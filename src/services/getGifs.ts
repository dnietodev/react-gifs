const apiKEY = 'haWz06GcJKFGdOkiuwp2AJQuoxEj2H94';

export default function getGifs({
  keyword,
}: {
  keyword: string;
}): Promise<string[]> {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((gif: { images: any; title?: any; id?: any }) => {
        const { images, title, id } = gif;
        const { url } = gif.images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    });
}
