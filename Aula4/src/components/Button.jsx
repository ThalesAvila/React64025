export default function Button() {
  const handleClick = () => {
    console.log('Fui clicado!!');
  };

  return <button onClick={() => handleClick()}>I don't do anything</button>;
}
