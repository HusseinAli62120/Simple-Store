let app = new Vue({
    el: "#app",
    data: {
      showFeatures: false,
      ShowSocial: false,
    },
    methods: {
      features() {
        this.ShowSocial = false;
        this.showFeatures = !this.showFeatures;
        console.log("hello");
      },
      social() {
        this.showFeatures = false;
        this.ShowSocial = !this.ShowSocial;
      },
    },
    mounted() {
      const items = document.querySelector("#Accessories");
      console.log(items);

      const callBackItems = function (entries) {
        console.log("items");
        if (entries[0].isIntersecting) {
          console.log("ITEMS");
          entries[0].target.classList.add("content");
        }
      };
      const observerOfItems = new IntersectionObserver(callBackItems, {
        threshold: 0.2,
      });
      observerOfItems.observe(items);

      // New intersection

      const workshop = document.querySelector("#WorkShops");
      console.log(workshop);

      const callBackWorkShop = function (entries) {
        console.log("workshop");
        if (entries[0].isIntersecting) {
          console.log("WORKSHOP");
          entries[0].target.classList.add("content");
        }
      };
      const observerOfWorkshop = new IntersectionObserver(callBackWorkShop, { threshold: 0.3 });
      observerOfWorkshop.observe(workshop);

      // New intersection

      const decor = document.querySelector("#Decor");
      console.log(decor);
      const callBackDecor = function (entries) {
        console.log("decor");
        if (entries[0].isIntersecting) {
          console.log("DECOR");
          entries[0].target.classList.add("content");
        }
      };
      const observerOfDecor = new IntersectionObserver(callBackDecor, {
        threshold: 0.3,
      });
      observerOfDecor.observe(decor);
      // New intersection

      const us = document.querySelector("#Us");
      console.log(us);

      const callBackUS = function (entries) {
        console.log(entries);
        console.log("Hello");
        if (entries[0].isIntersecting) {
          console.log("Yes");
          entries[0].target.classList.add("content");
        }
      };
      const observerUs = new IntersectionObserver(callBackUS, {
        threshold: 0.3,
      });
      observerUs.observe(us);
    },
  });

  var swiper = new Swiper(".Testimonial", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: false,

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".bestSeller", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".Accessories", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });



  console.log("this is javascript");