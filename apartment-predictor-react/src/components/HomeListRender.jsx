import CustomizedTables from "../ui/CustomizedTables";

export default function HomeListRender({ apartments }) {
  return (
    <>
      <h1>Apartments</h1>
      <p>This is an exercise to test React render</p>

      <CustomizedTables apartments={apartments} />
    </>
  );
}
