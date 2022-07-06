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
    //탭 스타일
    $(".visual a").removeClass("active");
    $(this).addClass("active");

    //탭에 따라 show/hide
    var thisParentIndex = $(this).parent("li").index();
    $("#sec .tabcont").hide();
    $("#sec .tabcont").eq(thisParentIndex).show();

    //탭의 텍스트에 따라 필터하여 show/hide
    var thisText = $(this).text();
    if ($(this).parents("ul").hasClass("filter")) {
      $(".boards  tbody tr").filter(function () {
        if (thisText == "전체보기") {
          $(".boards  tbody tr").show();
        } else {
          $(this).toggle($(this).text().indexOf(thisText) > -1);
        }
      });
    }

    //a 의 기본 기능인 링크 기능 방지
    return false;
  });
});
