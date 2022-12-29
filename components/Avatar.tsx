type AvatarProps = { size?: number; url: string; alt: string };

export default function Avatar(props: AvatarProps) {
  return (
    <img
      width={props.size || 40}
      alt={props.alt}
      src={props.url}
      className="rounded-full"
    />
  );
}
