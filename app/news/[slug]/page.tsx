type NewsParamProps = {
  params: { slug: string };
};
export default function NewsItemPage({ params }: NewsParamProps) {
  return (
    <div id="home">
      <h1>{params.slug}</h1>
    </div>
  );
}
