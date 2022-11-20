export default function Gif({
  title,
  id,
  url,
}: {
  title: string;
  id: string;
  url: string;
}) {
  return (
    <div>
      <h4>{title}</h4>
      <small>{id}</small>
      <img src={url} alt={title} />
    </div>
  );
}
