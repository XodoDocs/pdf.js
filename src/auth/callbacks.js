
export default ((module) => {
  module['rC'] = (imgData, canvas, options, pageIdx) => {
    canvas['getContext']('2d')['putImageData'](imgData, 0, 0);
    options['drawProgressive'](canvas);
    options['drawComplete'](canvas, options, pageIdx);
  };

  module['dC'] = (onDocumentLoaded, trigger) => {
    onDocumentLoaded();
    trigger('documentComplete');
  };
})(window);
