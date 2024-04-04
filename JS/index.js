const filterCoding = document.querySelector("#codingFilter");
const filterDesign = document.querySelector("#designFilter");
const filterMarketing = document.querySelector("#marketingFilter");
const loadmore = document.querySelector(".loadmore");
const elementList = document.querySelectorAll(".card");
let mediaQuery = window.matchMedia("(max-width: 600px)");

loadcard();

filterCoding.addEventListener("change", () => {
  if (filterCoding.checked) {
    removeShow();
    document.querySelectorAll(".coding").forEach((card) => {
      card.classList.add("show");
    });

    removeActive();

    document.querySelector(".coding-filter").classList.add("active");
    filterMarketing.checked = false;
    filterDesign.checked = false;

    if (mediaQuery.matches) {
      if ($(".coding:hidden").length > 0) {
        $(".loadmore").addClass("show");
      }

      $(".loadmore").on("click", function () {
        $(".coding:hidden").slice(0, 6).addClass("mobile");

        if ($(".coding:hidden").length == 0) {
          $(".loadmore").removeClass("show");
        }
      });
    }
  } else {
    removeActive();
    addShow();

    if ($(".card:hidden").length > 0) {
      $(".loadmore").addClass("show");
    }
    $(".loadmore").on("click", function () {
      $(".card:hidden").slice(0, 6).addClass("mobile");
      if ($(".card:hidden").length == 0) {
        $(".loadmore").removeClass("show");
      }
    });
  }
});

filterDesign.addEventListener("change", () => {
  if (filterDesign.checked) {
    removeShow();

    document.querySelectorAll(".design").forEach((card) => {
      card.classList.add("show");
    });
    removeActive();
    document.querySelector(".design-filter").classList.add("active");

    filterMarketing.checked = false;
    filterCoding.checked = false;
    if (mediaQuery.matches) {
      if ($(".design:hidden").length > 0) {
        $(".loadmore").addClass("show");
      }
      $(".loadmore").on("click", function () {
        $(".design:hidden").slice(0, 6).addClass("mobile");
        if ($(".design:hidden").length == 0) {
          $(".loadmore").removeClass("show");
        }
      });
    }
  } else {
    removeActive();
    addShow();

    if ($(".card:hidden").length > 0) {
      $(".loadmore").addClass("show");
    }
    $(".loadmore").on("click", function () {
      $(".card:hidden").slice(0, 6).addClass("mobile");
      if ($(".card:hidden").length == 0) {
        $(".loadmore").removeClass("show");
      }
    });
  }
});

filterMarketing.addEventListener("change", () => {
  if (filterMarketing.checked) {
    removeShow();

    document.querySelectorAll(".marketing").forEach((card) => {
      card.classList.add("show");
    });
    removeActive();
    document.querySelector(".marketing-filter").classList.add("active");

    filterDesign.checked = false;
    filterCoding.checked = false;
    if (mediaQuery.matches) {
      if ($(".marketing:hidden").length == 0) {
        $(".loadmore").removeClass("show");
      }
      $(".loadmore").on("click", function () {
        $(".marketing:hidden").slice(0, 6).addClass("mobile");
        if ($(".marketing:hidden").length == 0) {
          $(".loadmore").removeClass("show");
        }
      });
    }
  } else {
    removeActive();
    addShow();

    if ($(".card:hidden").length > 0) {
      $(".loadmore").addClass("show");
    }
    $(".loadmore").on("click", function () {
      $(".card:hidden").slice(0, 6).addClass("mobile");
      if ($(".card:hidden").length == 0) {
        $(".loadmore").removeClass("show");
      }
    });
  }
});

function removeActive() {
  document.querySelector(".coding-filter").classList.remove("active");
  document.querySelector(".design-filter").classList.remove("active");
  document.querySelector(".marketing-filter").classList.remove("active");
}

function removeShow() {
  elementList.forEach((card) => {
    card.classList.remove("show");
  });
}

function addShow() {
  elementList.forEach((card) => {
    card.classList.add("show");
  });
}

function loadcard() {
  if (
    filterCoding.checked == false &&
    filterDesign.checked == false &&
    filterMarketing.checked == false
  ) {
    if ($(".card:hidden").length > 0) {
      $(".loadmore").addClass("show");
    }
    $(".loadmore").on("click", function () {
      $(".card:hidden").slice(0, 6).addClass("mobile");
      if ($(".card:hidden").length == 0) {
        $(".loadmore").removeClass("show");
      }
    });
  }
}
