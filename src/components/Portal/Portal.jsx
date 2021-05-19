const Portal = ({ isPortalOpen }) => {
  if (!isPortalOpen) return null;
  return <h1>I'm a portal</h1>;
};

export default Portal;
