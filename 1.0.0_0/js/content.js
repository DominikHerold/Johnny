function replaceJohnny(e) {
  if (
    void 0 !== e &&
    e &&
    !(
      skipTags.test(e.nodeName) ||
      e.isContentEditable === !0 ||
      (null !== e.parentNode && e.parentNode.isContentEditable)
    )
  ) {
    if (e.hasChildNodes()) {
      var r = e.childNodes,
        t = r.length,
        n = 0;
      for (n; n < t; n++) replaceJohnny(r[n]);
    }
    3 == e.nodeType &&
      (e.nodeValue = e.nodeValue.replace(pattern, replaceWith));
  }
}
var skipTags = new RegExp("^(?:SCRIPT|FORM|INPUT|TEXTAREA|STYLE)$"),
  pattern = /Dominik( |\.|-|_)?F(\u00F6|oe)rst/gi,
  replaceWith = "Johnny";
replaceJohnny(document.body),
  (document.title = document.title.replace(pattern, replaceWith));
var observer = new MutationObserver(function(e) {
  var r = e.length,
    t = 0;
  for (t; t < r; t++) {
    var n = e[t].addedNodes.length,
      o = 0;
    for (o; o < n; o++) {
      var a = e[t].addedNodes[o];
      replaceJohnny(a);
    }
  }
});
observer.observe(document.body, { childList: !0, subtree: !0 });
