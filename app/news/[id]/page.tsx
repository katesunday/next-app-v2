type NewsParamProps = {
  params: { id: string };
};
export default function NewsItemPage({ params }: NewsParamProps) {
  return (
    <div id="home">
      <h1>{params.id}</h1>
    </div>
  );
}
