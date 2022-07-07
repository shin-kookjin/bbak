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
    $("html,body").animate({
      scrollTop: 0,
    });
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

  /*  
   매장 찾기 페이지 관련 기능들
*/

  //매장 리스트 아코디언 기능
  $(".list").click(function () {
    $(this).toggleClass("on");
  });

  //매장 지역 검색
  $("#sido").change(function () {
    var selected = $(this).find("option:checked").text();
    storeSearch(selected);

    // 선택된 값에 따라 다음 셀렉트 옵션값으로 추가
    var sel_val = $(this).val(); //선택한 값
    var app = ""; //바꿀값
    if (sel_val == "18") {
      app = `
        <option value="">전체</option><option value="37">강남구</option><option value="38">강동구</option><option value="39">강북구</option><option value="40">강서구</option><option value="41">관악구</option><option value="42">광진구</option><option value="43">구로구</option><option value="44">금천구</option><option value="45">노원구</option><option value="46">도봉구</option><option value="47">동대문구</option><option value="48">동작구</option><option value="49">마포구</option><option value="50">서대문구</option><option value="51">서초구</option><option value="52">성동구</option><option value="53">성북구</option><option value="54">송파구</option><option value="55">양천구</option><option value="56">영등포구</option><option value="57">용산구</option><option value="58">은평구</option><option value="59">종로구</option><option value="60">중구</option><option value="61">중랑구</option
        `;
    } else if (sel_val == "19") {
      app = `
        <option value="">전체</option><option value="62">고양시</option><option value="63">부천시</option><option value="64">성남시</option><option value="65">수원시</option><option value="66">안산시</option><option value="67">용인시</option><option value="68">안양시</option><option value="69">의왕시</option><option value="70">의정부시</option><option value="71">이천시</option><option value="72">파주시</option><option value="73">평택시</option><option value="74">포천시</option><option value="75">하남시</option><option value="76">화성시</option><option value="77">과천시</option><option value="78">광명시</option><option value="79">광주시</option><option value="80">구리시</option><option value="81">군포시</option><option value="82">김포시</option><option value="83">남양주시</option><option value="84">동두천시</option><option value="85">시흥시</option><option value="86">안성시</option><option value="88">오산시</option><option value="89">여주시</option><option value="90">양주시</option><option value="91">가평군</option><option value="92">양평군</option><option value="93">연천군</option>
        `;
    } else if (sel_val == "20") {
      app = `
        <option value="">전체</option><option value="104">대덕구</option><option value="105">동구</option><option value="106">서구</option><option value="107">유성구</option><option value="108">중구</option>
        `;
    } else {
      app = `<option value="">전체</option>`;
    }

    $("#gugun").html(app); //정해진 바꿀값을 구군에 내용넣기
  });

  //매장명 검색
  $(".btn_search").click(function () {
    var val = $("#storename").val();
    storeSearch(val);
  });
  $("#storename").keyup(function (evt) {
    var val = $("#storename").val();
    if (evt.keyCode == 13) {
      storeSearch(val);
    }
    if (val == "") {
      storeSearch("전체");
    }
  });

  //검색기능
  function storeSearch(v) {
    $(".boards tr.list").filter(function () {
      if (v == "전체") {
        $(this).show();
      } else {
        $(this).toggle($(this).text().indexOf(v) > -1);
      }
    });
  }
});
