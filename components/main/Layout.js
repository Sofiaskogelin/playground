function Layout() {
  return (
    <style jsx global>
      {`
        body {
          background: #d66d75; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #e29587,
            #d66d75
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #e29587,
            #d66d75
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          margin: 0;
          transition: all 0.3s ease-in-out;
        }

        .bg-active {
          transition: background 1s ease;

          background: white;
        }
      `}
    </style>
  );
}

export default Layout;
