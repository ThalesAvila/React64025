function Button({ aoClicar, children }) {
  return <button onClick={aoClicar}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button aoClicar={handlePlayClick}>Play "{movieName}"</Button>;
}

function UploadButton() {
  return <Button aoClicar={() => alert('Uploading!')}>Upload Image</Button>;
}

export default function Toolbar2() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <PlayButton movieName="James Bond" />
      <UploadButton />
    </div>
  );
}
