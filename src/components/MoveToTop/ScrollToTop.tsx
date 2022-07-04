import React from 'react';

function MoveToTop() {
  let mybutton = document.getElementById('move-to-top') as HTMLElement;

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <button onClick={topFunction} id="move-to-top" className="move-to-top">
      <i className="fa fa-angle-up" style={{ fontSize: '2rem' }}></i>
    </button>
  );
}

export default MoveToTop;
