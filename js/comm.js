$(function () {
  //헤더 메인메뉴 호버
  $(".main>li").hover(
    function () {
      $(this).find(".sub").show();
      $(".bg").stop().slideDown(300);
      if ($(this).hasClass("nosub")) {
        $(".bg").hide();
      }
    },
    function () {
      $(this).find(".sub").hide();
      $(".bg").stop().slideUp(300);
    }
  );

  //푸터 패밀리 사이트
  $(".familySte > span").click(function () {
    $(".familySte .fmenu").slideToggle(200);
  });

  //푸터 top 클릭
  $(".toTop a").click(function () {
    $("html,body").animate({ scrollTop: 0 });
    return false;
  });

  //서브 비주얼 영역 탭메뉴
  $(".visual a").click(function () {
    $(".visual a").removeClass("active");
    $(this).addClass("active");

    var thisParentIndex = $(this).parent("li").index();
    $("#sec .tabcont").hide();
    $("#sec .tabcont").eq(thisParentIndex).show();

    return false;
  });
});
