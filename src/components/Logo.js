export function Logo({ dark }) {
  return (
    <>
      {!dark ? (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo-light-theme.svg`}
          alt="Logo Light"
        />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo-dark-theme.svg`}
          alt="Logo Dark"
        />
      )}
    </>
  );
}
