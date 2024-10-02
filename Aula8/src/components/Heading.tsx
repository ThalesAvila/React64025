type HeadingProps = {
  title: string;
};

export default function Heading({ title }: HeadingProps) {
  return <h1 className="font-semibold text-5xl text-neutral-900">{title}</h1>;
}
