export function Logo({ dark }) {
  return (
    <>
      {!dark ? (
        <img src="/assets/images/logo-light-theme.svg" alt="Logo Light" />
      ) : (
        <img src="/assets/images/logo-dark-theme.svg" alt="Logo Dark" />
      )}
    </>
  );
}
