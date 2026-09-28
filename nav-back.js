(() => {
  const page = decodeURIComponent(location.pathname.split("/").pop() || "index.html").toLowerCase();
  const routes = {
  "aboutmiaodad.html": "oldchengguan.html",
  "flowerbar.html": "search.html",
  "oldchengguan.html": "chengguan.html",
  "search.html": "chengguan.html",
  "fpage2.html": "flowerbar.html",
  "fpage3.html": "flowerbar.html",
  "fpage4.html": "flowerbar.html",
  "page1.html": "chengguan.html",
  "page2.html": "chengguan.html",
  "page3.html": "chengguan.html",
  "page4.html": "chengguan.html",
  "page5.html": "chengguan.html",
  "page6.html": "chengguan.html",
  "page7.html": "chengguan.html",
  "oldpage1.html": "oldchengguan.html",
  "oldpage2.html": "oldchengguan.html",
  "oldpage3.html": "oldchengguan.html",
  "oldpage4.html": "oldchengguan.html",
  "oldpage5.html": "oldchengguan.html",
  "oldpage6.html": "oldchengguan.html",
  "oldpage7.html": "oldchengguan.html",
  "oldpage8.html": "oldchengguan.html",
  "oldpage9.html": "oldchengguan.html",
  "oldpage10.html": "oldchengguan.html",
  "oldpage11.html": "oldchengguan.html",
  "password.html": "chengguan.html",
  "password1.html": "oldchengguan.html",
  "post_hmjh.html": "xinglover.html",
  "potato.html": "search.html",
  "miaomiao.html": "search.html",
  "ruomiao.html": "shangxin.html",
  "timemachine.html": "xingxing.html",
  "texun-in.html": "chengguan.html",
  "texunqazwsx.html": "chengguan.html",
  "temple-leak.html": "thanks.html",
  "xinglover.html": "chengguan.html",
  "xingxing.html": "chengguan.html",
  "shangxin.html": "chengguan.html"
};
  const target = routes[page];
  if (!target || document.querySelector("[data-game-back]")) return;

  const back = document.createElement("a");
  back.href = target;
  back.textContent = "← 返回";
  back.setAttribute("data-game-back", "");
  back.setAttribute("aria-label", "返回上一层页面");
  Object.assign(back.style, {
    position: "fixed",
    left: "12px",
    bottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
    zIndex: "99999",
    display: "inline-flex",
    alignItems: "center",
    minHeight: "42px",
    padding: "0 15px",
    border: "1px solid rgba(0, 0, 0, .18)",
    borderRadius: "999px",
    background: "rgba(255, 255, 255, .94)",
    boxShadow: "0 3px 14px rgba(0, 0, 0, .18)",
    color: "#244a86",
    font: "600 14px/1 -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    textDecoration: "none",
    WebkitTapHighlightColor: "transparent"
  });
  document.body.appendChild(back);
})();
