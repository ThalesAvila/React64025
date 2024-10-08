export default function EventPropagation() {
  return (
    <div
      style={{
        padding: 40,
        backgroundColor: '#000',
      }}
      className="Toolbar"
      onClick={() => {
        alert('You clicked on the toolbar!');
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          alert('Playing!');
        }}
      >
        Play Movie
      </button>
      <button onClick={() => alert('Uploading!')}>Upload Image</button>
    </div>
  );
}
