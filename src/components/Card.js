export function Card({ children, bgColor, bgImage }) {
  return (
    <div
      className={`w-full ${bgColor} rounded-lg px-4 py-6 bg-right bg-auto bg-no-repeat`}
      style={{
        backgroundImage: `url(/assets/images/${bgImage})`,
      }}
    >
      {children}
    </div>
  );
}
