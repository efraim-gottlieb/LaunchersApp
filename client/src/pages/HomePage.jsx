function HomePage(props) {
  const { launchers } = props;

  return (
    <>
      <nav>
        <button></button>
      </nav>
      <div className="launchers">{JSON.stringify(launchers)}</div>
    </>
  );
}

export default HomePage;
