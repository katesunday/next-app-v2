'use client';
interface ErrorType {
  error?: Error;
}
export default function FilterError(error?: ErrorType) {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>Invalid path.</p>
      {/*{error.message && <p>{error.message}</p>}*/}
    </div>
  );
}
