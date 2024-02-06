(function () {
  "use strict";
  var e = {
      873: function (e, t, s) {
        var l = s(963),
          n = s(252);
        function a(e, t, s, l, a, r) {
          const o = (0, n.up)("header-one"),
            i = (0, n.up)("router-view"),
            c = (0, n.up)("FooterPage");
          return (
            (0, n.wg)(),
            (0, n.iD)(
              n.HY,
              null,
              [(0, n.Wm)(o), (0, n.Wm)(i), (0, n.Wm)(c)],
              64
            )
          );
        }
        const r = {
            class:
              "flex flex-col sm:flex-row bg-[#0F113C] justify-center text-white p-5",
          },
          o = (0, n.uE)(
            '<div class="sm:w-[30%]"><img src="assets/imgs/logo-white.svg" class="my-5" alt=""><p class="text-white sm:w-[50%]"> A company specializes in the fields of information technology and call center consultation </p></div><div class="sm:mr-40"><h1 class="my-5 font-bold text-2xl">useful links</h1><ul class=""><li class="list-none"><a href="">Call Center</a></li><li class="list-none"><a href="">services</a></li><li class="list-none"><a href="">projects</a></li><li class="list-none"><a href="">testemation</a></li></ul></div><div><h1 class="my-5 font-bold text-2xl">follow us</h1><div class="flex"><a href=""><img src="assets/imgs/facebook.svg" class="mx-1" alt=""></a><a href=""><img src="assets/imgs/Telegram.svg" class="mx-1" alt=""></a><a href=""><img src="assets/imgs/whatsapp.svg" class="mx-1" alt=""></a></div></div>',
            3
          ),
          i = [o];
        function c(e, t, s, l, a, o) {
          return (0, n.wg)(), (0, n.iD)("footer", r, i);
        }
        var d = { name: "FooterPage" },
          m = s(744);
        const u = (0, m.Z)(d, [["render", c]]);
        var p = u,
          x = s(262),
          g = s(577),
          v = s(808);
        const C = (e) => (
            (0, n.dD)("data-v-ebd7ccd8"), (e = e()), (0, n.Cn)(), e
          ),
          f = C(() => (0, n._)("img", { src: "", alt: "" }, null, -1)),
          w = { class: "hidden lg:block" },
          h = { class: "space-x-8 text-xl text-center", "aria-label": "main" },
          b = C(() =>
            (0, n._)(
              "a",
              {
                href: "#Call_Center",
                class: "hover:opacity-90 hover:text-blue-700",
              },
              "Call Center",
              -1
            )
          ),
          _ = C(() =>
            (0, n._)(
              "a",
              {
                href: "#About_Us",
                class: "hover:opacity-90 hover:text-blue-700",
              },
              "About Us",
              -1
            )
          ),
          S = C(() =>
            (0, n._)(
              "a",
              {
                href: "#Services",
                class: "hover:opacity-90 hover:text-blue-700",
              },
              "Services",
              -1
            )
          ),
          y = C(() =>
            (0, n._)(
              "a",
              {
                href: "#Projects",
                class: "hover:opacity-90 hover:text-blue-700",
              },
              "Projects ",
              -1
            )
          ),
          A = C(() => (0, n._)("h1", null, "Home", -1)),
          k = C(() => (0, n._)("h1", null, "Call Center", -1)),
          D = C(() => (0, n._)("h1", null, "Services", -1)),
          F = C(() => (0, n._)("h1", null, "Contact Us", -1));
        var P = {
          __name: "HeaderOne",
          setup(e) {
            return (e, t) => {
              const s = (0, n.up)("router-link");
              return (
                (0, n.wg)(),
                (0, n.j4)(
                  (0, x.SU)(v.xy),
                  {
                    class:
                      "flex justify-between sm:justify-between sm:mx-[82px] my-[35px] font-bold",
                  },
                  {
                    logo: (0, n.w5)(() => [
                      (0, n._)("div", null, [
                        (0, n.Wm)(
                          (0, x.SU)(v.H$),
                          {
                            alt: " logo",
                            "image-url": "assets/imgs/logo.svg",
                            link: "#",
                          },
                          { default: (0, n.w5)(() => [f]), _: 1 }
                        ),
                      ]),
                    ]),
                    default: (0, n.w5)(({ isShowMenu: t }) => [
                      (0, n._)("div", w, [
                        (0, n._)("nav", h, [
                          (0, n.Wm)(
                            s,
                            { to: "/" },
                            {
                              default: (0, n.w5)(() => [
                                (0, n._)(
                                  "a",
                                  {
                                    href: "#Home",
                                    class: (0, g.C_)([
                                      "hover:opacity-90 hover:text-blue-700",
                                      {
                                        "text-blue-700": "/" === e.$route.path,
                                      },
                                    ]),
                                  },
                                  "Home",
                                  2
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          b,
                          _,
                          S,
                          y,
                          (0, n.Wm)(
                            s,
                            { to: "/ContactUs" },
                            {
                              default: (0, n.w5)(() => [
                                (0, n._)(
                                  "a",
                                  {
                                    href: "#Contact_Us",
                                    class: (0, g.C_)([
                                      "hover:opacity-90",
                                      {
                                        "text-blue-700":
                                          "/ContactUs" === e.$route.path,
                                      },
                                    ]),
                                  },
                                  "Contact Us",
                                  2
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                      ]),
                      (0, n.Wm)(
                        (0, x.SU)(v.z4),
                        { class: "lg:hidden", "is-show-menu": t },
                        {
                          default: (0, n.w5)(() => [
                            (0, n.Wm)(
                              (0, x.SU)(v.F_),
                              {
                                class: (0, g.C_)(
                                  "/" === e.$route.path ? "is-active" : ""
                                ),
                              },
                              {
                                default: (0, n.w5)(() => [
                                  (0, n.Wm)(
                                    s,
                                    { to: "/" },
                                    { default: (0, n.w5)(() => [A]), _: 1 }
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"]
                            ),
                            (0, n.Wm)(
                              (0, x.SU)(v.F_),
                              {
                                class: (0, g.C_)(
                                  "/callcenter/:id" === e.$route.path
                                    ? "is-active"
                                    : ""
                                ),
                              },
                              {
                                default: (0, n.w5)(() => [
                                  (0, n.Wm)(
                                    s,
                                    { to: "/callcenter/:id" },
                                    { default: (0, n.w5)(() => [k]), _: 1 }
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"]
                            ),
                            (0, n.Wm)(
                              (0, x.SU)(v.F_),
                              { link: "#" },
                              {
                                default: (0, n.w5)(() => [
                                  (0, n.Uk)(" About Us "),
                                ]),
                                _: 1,
                              }
                            ),
                            (0, n.Wm)(
                              (0, x.SU)(v.F_),
                              {
                                class: (0, g.C_)(
                                  "/Services" === e.$route.path
                                    ? "is-active"
                                    : ""
                                ),
                              },
                              {
                                default: (0, n.w5)(() => [
                                  (0, n.Wm)(
                                    s,
                                    { to: "/Services" },
                                    { default: (0, n.w5)(() => [D]), _: 1 }
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"]
                            ),
                            (0, n.Wm)(
                              (0, x.SU)(v.F_),
                              { link: "#" },
                              {
                                default: (0, n.w5)(() => [
                                  (0, n.Uk)(" Projects "),
                                ]),
                                _: 1,
                              }
                            ),
                            (0, n.Wm)(
                              (0, x.SU)(v.F_),
                              {
                                class: (0, g.C_)(
                                  "/ContactUs" === e.$route.path
                                    ? "is-active"
                                    : ""
                                ),
                                link: "#",
                              },
                              {
                                default: (0, n.w5)(() => [
                                  (0, n.Wm)(
                                    s,
                                    { to: "/ContactUs" },
                                    { default: (0, n.w5)(() => [F]), _: 1 }
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"]
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["is-show-menu"]
                      ),
                    ]),
                    _: 1,
                  }
                )
              );
            };
          },
        };
        const I = (0, m.Z)(P, [["__scopeId", "data-v-ebd7ccd8"]]);
        var W = I,
          j = { components: { HeaderOne: W, FooterPage: p } };
        const z = (0, m.Z)(j, [["render", a]]);
        var H = z,
          U = s(201);
        const E = { class: "home" };
        function O(e, t, s, l, a, r) {
          const o = (0, n.up)("MainPage");
          return (0, n.wg)(), (0, n.iD)("div", E, [(0, n.Wm)(o)]);
        }
        function q(e, t, s, l, a, r) {
          const o = (0, n.up)("HomeSection"),
            i = (0, n.up)("CallCenter"),
            c = (0, n.up)("AboutSection"),
            d = (0, n.up)("Services"),
            m = (0, n.up)("Projects"),
            u = (0, n.up)("Testimonial"),
            p = (0, n.up)("Our_Clients");
          return (
            (0, n.wg)(),
            (0, n.iD)("main", null, [
              (0, n.Wm)(o),
              (0, n.Wm)(i),
              (0, n.Wm)(c),
              (0, n.Wm)(d),
              (0, n.Wm)(m),
              (0, n.Wm)(u),
              (0, n.Wm)(p),
            ])
          );
        }
        const B = {
            class:
              "min-w-4xl justify-between capitalize flex flex-col md:flex-row",
          },
          Z = { class: "flex flex-col sm:w-[100%] sm:mx-24 mx-5" },
          Y = (0, n._)(
            "h6",
            { class: "text-xl py-3 text-[#F3AF1C]" },
            "why choose us",
            -1
          ),
          M = (0, n._)(
            "h1",
            {
              class:
                "text-3xl sm:leading-[62px] leading-normal sm:text-[50px] font-bold sm:w-[70%] text-[#0F113C]",
            },
            " developing solutions for the future ",
            -1
          ),
          T = (0, n._)(
            "p",
            { class: "text-lg sm:w-[80%] py-3 text-gray-600" },
            " specializes in software development and call center consultation development and call center consultation ",
            -1
          ),
          V = (0, n.uE)(
            '<div class="relative w-[90%] hidden md:block"><div class="drop-shadow-lg bg-white text-center text-black rounded-xl absolute top-[130px] left-[-50px] w-[200px] p-3"><h2 class="text-2xl font-extrabold text-[#F3AF1C]"> 15k <span class="text-[#0F136B]">+</span></h2><p class="text-sm font-normal"> clients who trust us </p></div><div class="drop-shadow-lg bg-white text-center text-black rounded-xl absolute top-[90px] right-0 w-[200px] p-3"><h2 class="text-2xl font-bold text-[#0F113C] flex gap-2"><img src="assets/imgs/Stocks.svg" alt=""> 7Years <span class="text-[#0F136B]">+</span></h2><p class="text-sm font-normal"> experiences the excellence </p></div><div class="drop-shadow-lg bg-white text-center text-black rounded-xl absolute bottom-[50px] right-0 w-[200px] p-3"><p class="text-sm[17px] text-[#0F113C] flex font-bold"> service was fast and i got what i requested </p><div class="flex"><img src="assets/imgs/person.svg" alt=""><div class="text-start mx-2"><h1 class="text-sm[12px] font-bold">lamis saleem</h1><h1 class="text-sm[10px]">customer service</h1></div></div></div><div class="w-full"><img src="assets/imgs/main.svg" class="w-full" alt=""></div></div>',
            1
          );
        function K(e, t, s, l, a, r) {
          const o = (0, n.up)("Button");
          return (
            (0, n.wg)(),
            (0, n.iD)("section", B, [
              (0, n._)("div", Z, [
                Y,
                M,
                T,
                (0, n.Wm)(o, { text: a.text }, null, 8, ["text"]),
              ]),
              V,
            ])
          );
        }
        function L(e, t, s, l, a, r) {
          return (
            (0, n.wg)(),
            (0, n.iD)(
              "button",
              { class: (0, g.C_)(s.Class) },
              (0, g.zw)(s.text),
              3
            )
          );
        }
        var $ = {
          props: {
            Class: {
              type: String,
              default:
                "font-bold w-36 rounded-xl border border-solid border-slate-900 dark:border-none bg-[#0F136B] text-white p-3",
            },
            text: { type: String, default: "Save" },
          },
        };
        const R = (0, m.Z)($, [["render", L]]);
        var Q = R,
          J = {
            name: "HomeSection",
            components: { Button: Q },
            data() {
              return { text: "Contact Us" };
            },
          };
        const N = (0, m.Z)(J, [["render", K]]);
        var G = N;
        const X = { id: "Call_Center", class: "scroll-smooth" },
          ee = (0, n._)(
            "h5",
            { class: "text-center text-[#F3AF1C] text-xl sm:p-6 p-0" },
            " Call Center ",
            -1
          ),
          te = (0, n._)(
            "h1",
            {
              class:
                "text-center sm:text-5xl/[40px] text-3xl font-bold text-[#0F113C] sm:my-0 my-2",
            },
            " Our Special Service ",
            -1
          ),
          se = {
            class:
              "flex flex-wrap justify-center items-center sm:my-10 gap-5 rounded text-white mt-3",
          },
          le = (0, n._)(
            "a",
            {
              href: "",
              class:
                "flex justify-center hover:opacity-90 text-[#212AE4] font-extrabold sm:mt-0 mt-4",
            },
            [
              (0, n.Uk)(" browse all "),
              (0, n._)("span", null, [
                (0, n._)("img", {
                  src: "assets/imgs/left-arrorw.svg",
                  class: "mx-1",
                  alt: "",
                }),
              ]),
            ],
            -1
          );
        function ne(e, t, s, l, a, r) {
          const o = (0, n.up)("Card"),
            i = (0, n.up)("router-link");
          return (
            (0, n.wg)(),
            (0, n.iD)("section", X, [
              (0, n.Uk)((0, g.zw)(e.jsonData) + " ", 1),
              ee,
              te,
              (0, n._)("div", se, [
                ((0, n.wg)(!0),
                (0, n.iD)(
                  n.HY,
                  null,
                  (0, n.Ko)(
                    a.Services,
                    (e) => (
                      (0, n.wg)(),
                      (0, n.j4)(
                        i,
                        {
                          key: e.id,
                          to: { name: "CallCenter", params: { id: e.id } },
                        },
                        {
                          default: (0, n.w5)(() => [
                            (0, n.Wm)(
                              o,
                              {
                                ImgClass: a.Class,
                                Contents: e,
                                ParClass: a.ParClass,
                              },
                              null,
                              8,
                              ["ImgClass", "Contents", "ParClass"]
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["to"]
                      )
                    )
                  ),
                  128
                )),
              ]),
              le,
            ])
          );
        }
        var ae = JSON.parse(
          '{"y":[{"id":1,"img":"","title":"call center system","desc":" we handles inbound and outbound calls from current and potential customers","paragraph":"Specializes In Software Development And Call Center Consultation Development And Call Center Consultation Specializes In Software Development And Call Center Consultation Development And Call Center Consultation Specializes In Software Development And Call Center Consultation Development And Call Center Consultation Specializes In Software Development And Call Center Consultation Development And Call Center Consultation Ll Center Consultation Development And Call Center Consultation"},{"id":2,"img":"assets/imgs/headphone.svg","title":"Auto outbound calls","desc":"for web and mobile applications within international standards...","paragraph":"Specializes In Software Development And Call Center Consultation Development And Call Center Consultation Specializes In Software Development And Call Center Consultation Development And Call Center Consultation Specializes In Software Development And Call Center Consultation Development And Call Center Consultation Specializes In Software Development And Call Center Consultation Development And Call Center Consultation Ll Center Consultation Development And Call Center Consultation"},{"id":3,"img":"assets/imgs/Setting.svg","title":"Quality Management","desc":" we handles inbound and outbound calls from current and potential customers","paragraph":"Specializes In Software Development And Call Center Consultation Development And Call Center Consultation Specializes In Software Development And Call Center Consultation Development And Call Center Consultation Specializes In Software Development And Call Center Consultation Development And Call Center Consultation Specializes In Software Development And Call Center Consultation Development And Call Center Consultation Ll Center Consultation Development And Call Center Consultation"},{"id":4,"img":"assets/imgs/PhoneCalll.svg","title":"incoming calls","desc":" we handles inbound and outbound calls from current and potential customers","paragraph":"Specializes In Software Development And Call Center Consultation Development And Call Center Consultation Specializes In Software Development And Call Center Consultation Development And Call Center Consultation Specializes In Software Development And Call Center Consultation Development And Call Center Consultation Specializes In Software Development And Call Center Consultation Development And Call Center Consultation Ll Center Consultation Development And Call Center Consultation"}],"K":[{"id":1,"title":"call center system","img":"assets/imgs/CallCenter.svg","desc":"We Provides Integrated Call Center Services In An Equipment AndSoftware."},{"id":2,"title":"web development","img":"assets/imgs/HelpDesk.svg","desc":"We Provides Integrated Call Center Services In An Equipment AndSoftware."},{"id":3,"title":"Help Desk System","img":"assets/imgs/WevDev.svg","desc":"We Provides Integrated Call Center Services In An Equipment AndSoftware."},{"id":3,"title":"app development","img":"assets/imgs/AppDev.svg","desc":"We Provides Integrated Call Center Services In An Equipment AndSoftware."}]}'
        );
        const re = ["src"],
          oe = { class: "text-xl py-3 font-extrabold" },
          ie = { class: "text-lg font-normal" };
        function ce(e, t, s, l, a, r) {
          return (
            (0, n.wg)(),
            (0, n.iD)(
              "div",
              { class: (0, g.C_)(s.ParClass) },
              [
                (0, n._)(
                  "img",
                  {
                    src: s.Contents.img,
                    class: (0, g.C_)(s.ImgClass),
                    alt: "",
                  },
                  null,
                  10,
                  re
                ),
                (0, n._)("div", null, [
                  (0, n._)("h2", oe, (0, g.zw)(s.Contents.title), 1),
                  (0, n._)("p", ie, (0, g.zw)(s.Contents.desc), 1),
                ]),
              ],
              2
            )
          );
        }
        var de = {
          props: {
            Contents: {
              type: Object,
              default: () => ({
                img: "assets/imgs/headphone.svg",
                title: "Auto outbound calls",
                desc:
                  "for web and mobile applications within international standards...",
              }),
            },
            ImgClass: { type: String, default: "" },
            ParClass: {
              type: String,
              default:
                "cursor-pointer mx-3 drop-shadow-lg bg-white p-5 w-[270px] h-[252px] text-center text-black hover:text-white hover:bg-[#0F136B] rounded-xl mx-3 flex flex-col items-center",
            },
          },
        };
        const me = (0, m.Z)(de, [["render", ce]]);
        var ue = me,
          pe = {
            name: "CallCenters",
            components: { Card: ue },
            data() {
              return {
                Services: ae.y,
                Class: "bg-[#F3AF1C] rounded-full",
                ParClass:
                  "cursor-pointer mx-3 drop-shadow-lg bg-white p-5 w-[270px] h-[252px] text-center text-black hover:text-white hover:bg-[#0F136B] rounded-xl mx-3 flex flex-col items-center",
              };
            },
          };
        const xe = (0, m.Z)(pe, [["render", ne]]);
        var ge = xe;
        const ve = {
            class:
              "min-w-4xl flex justify-between flex-col md:flex-row-reverse scroll-mb-80",
            id: "About_Us",
          },
          Ce = (0, n._)(
            "div",
            { class: "container w-[100%] sm:mx-10 p-5" },
            [
              (0, n._)(
                "h6",
                { class: "text-xl py-3 text-[#F3AF1C]" },
                "about us"
              ),
              (0, n._)(
                "h1",
                {
                  class:
                    "sm:text-5xl/[50px] text-4xl font-bold text-[#0F113C] sm:w-[70%]",
                },
                " our company is here to help you "
              ),
              (0, n._)(
                "p",
                { class: "text-lg w-[79%] py-3 text-gray-600" },
                " A company specializes in the fields of information technology and call center consultation. We provide design and programming services for web and mobile applications within international standards with professional designs "
              ),
            ],
            -1
          ),
          fe = (0, n._)(
            "div",
            { class: "w-[90%]" },
            [(0, n._)("img", { src: "assets/imgs/main.svg", wi: "", alt: "" })],
            -1
          ),
          we = [Ce, fe];
        function he(e, t, s, l, a, r) {
          return (0, n.wg)(), (0, n.iD)("section", ve, we);
        }
        var be = { name: "AboutSection" };
        const _e = (0, m.Z)(be, [["render", he]]);
        var Se = _e;
        const ye = {
            class: "flex justify-between items-center flex-wrap lg:flex-nowrap",
            id: "Services",
          },
          Ae = { class: "flex flex-col w-[100%] sm:p-20 p-5" },
          ke = (0, n._)(
            "h6",
            { class: "text-xl py-3 text-[#F3AF1C]" },
            "Our Services",
            -1
          ),
          De = (0, n._)(
            "h1",
            {
              class:
                "sm:text-5xl/[50px] text-4xl font-bold text-[#0F113C] w-[90%]",
            },
            " latest from the services ",
            -1
          ),
          Fe = (0, n._)(
            "p",
            { class: "text-lg w-[80%] py-3 text-gray-600" },
            " The most service we provide in Temmam light ",
            -1
          ),
          Pe = { class: "grid sm:grid-cols-2 grid-cols-1 gap-6 p-5" };
        function Ie(e, t, s, l, a, r) {
          const o = (0, n.up)("Button"),
            i = (0, n.up)("router-link"),
            c = (0, n.up)("Card");
          return (
            (0, n.wg)(),
            (0, n.iD)("section", ye, [
              (0, n._)("div", Ae, [
                ke,
                De,
                Fe,
                (0, n.Wm)(
                  i,
                  { to: "/Services" },
                  {
                    default: (0, n.w5)(() => [
                      (0, n.Wm)(o, { text: a.text }, null, 8, ["text"]),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              (0, n._)("div", Pe, [
                ((0, n.wg)(!0),
                (0, n.iD)(
                  n.HY,
                  null,
                  (0, n.Ko)(
                    a.Services,
                    (t) => (
                      (0, n.wg)(),
                      (0, n.j4)(
                        c,
                        {
                          ImgClass: e.Class,
                          ParClass: a.ParClass,
                          key: t,
                          Contents: t,
                        },
                        null,
                        8,
                        ["ImgClass", "ParClass", "Contents"]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
        var We = {
          name: "Services",
          components: { Card: ue, Button: Q },
          data() {
            return {
              Services: ae.K,
              text: "View All",
              ParClass:
                "cursor-pointer bg-white p-10 text-black rounded-xl flex flex-col items-start shadow-md",
            };
          },
          mounted() {
            fetch("http://localhost:3000/Services")
              .then((e) => e.json())
              .then((e) => (this.Services = e))
              .catch((e) => console.log(e.message));
          },
        };
        const je = (0, m.Z)(We, [["render", Ie]]);
        var ze = je;
        const He = { id: "Projects" },
          Ue = (0, n._)(
            "h5",
            { class: "text-center text-[#F3AF1C] text-xl p-6 scroll-mb-32" },
            " recent work ",
            -1
          ),
          Ee = (0, n._)(
            "h1",
            {
              class:
                "text-center sm:text-5xl/[40px] text-4xl font-bold text-[#0F113C] sm:mb-0 mb-5",
            },
            " our recent projects ",
            -1
          ),
          Oe = {
            class:
              "lg:grid-cols-2 gap-6 my-10 rounded p-10 text-white hidden lg:grid flex-wrap",
          },
          qe = { class: "block lg:hidden" };
        function Be(e, t, s, l, a, r) {
          const o = (0, n.up)("Card");
          return (
            (0, n.wg)(),
            (0, n.iD)("section", He, [
              Ue,
              Ee,
              (0, n._)("div", Oe, [
                ((0, n.wg)(!0),
                (0, n.iD)(
                  n.HY,
                  null,
                  (0, n.Ko)(
                    l.Projects,
                    (e) => (
                      (0, n.wg)(),
                      (0, n.j4)(
                        o,
                        {
                          ImgClass: a.Class,
                          ParClass: a.ParClass,
                          key: e,
                          Contents: e,
                        },
                        null,
                        8,
                        ["ImgClass", "ParClass", "Contents"]
                      )
                    )
                  ),
                  128
                )),
              ]),
              (0, n._)("div", qe, [
                ((0, n.wg)(!0),
                (0, n.iD)(
                  n.HY,
                  null,
                  (0, n.Ko)(
                    l.Projects,
                    (e) => (
                      (0, n.wg)(),
                      (0, n.j4)(
                        o,
                        {
                          ImgClass: a.Class,
                          ParClass: a.ParClassMobile,
                          key: e,
                          Contents: e,
                        },
                        null,
                        8,
                        ["ImgClass", "ParClass", "Contents"]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
        var Ze = {
          name: "Projects",
          components: { Card: ue },
          data() {
            return {
              Class: "",
              ParClass:
                "cursor-pointer mx-2 flex items-center drop-shadow-lg bg-white p-5 w-[548px] h-[236px] text-black rounded-xl ",
              ParClassMobile:
                "my-3 cursor-pointer mx-3 flex flex-col items-center drop-shadow-lg bg-white p-5 text-black rounded-xl text-centers",
            };
          },
          setup() {
            const e = (0, x.iH)([
              {
                id: 1,
                title: "Help Desk System",
                img: "assets/imgs/RecentWork.svg",
                desc:
                  "We Provides Integrated Call Center Services In An Equipment AndSoftware.",
              },
              {
                id: 2,
                title: "Help Desk System",
                img: "assets/imgs/RecentWork.svg",
                desc:
                  "We Provides Integrated Call Center Services In An Equipment AndSoftware.",
              },
              {
                id: 3,
                title: "Help Desk System",
                img: "assets/imgs/RecentWork.svg",
                desc:
                  "We Provides Integrated Call Center Services In An Equipment AndSoftware.",
              },
              {
                id: 3,
                title: "Help Desk System",
                img: "assets/imgs/RecentWork.svg",
                desc:
                  "We Provides Integrated Call Center Services In An Equipment AndSoftware.",
              },
            ]);
            return { Projects: e };
          },
        };
        const Ye = (0, m.Z)(Ze, [["render", Be]]);
        var Me = Ye;
        const Te = (e) => (
            (0, n.dD)("data-v-2ffc05d4"), (e = e()), (0, n.Cn)(), e
          ),
          Ve = {
            class:
              "min-w-4xl capitalize flex justify-between flex-col md:flex-row scroll-mb-80",
            id: "About_Us",
          },
          Ke = Te(() =>
            (0, n._)(
              "h6",
              { class: "text-xl py-3 text-[#6e6b64]" },
              "testimonial",
              -1
            )
          ),
          Le = Te(() =>
            (0, n._)(
              "h1",
              { class: "text-4xl font-bold text-[#0F113C]" },
              "what our customers say",
              -1
            )
          ),
          $e = Te(() =>
            (0, n._)(
              "img",
              { src: "assets/imgs/colon.svg", class: "mt-7", alt: "" },
              null,
              -1
            )
          ),
          Re = { class: "text-lg p-3 text-gray-600" },
          Qe = { class: "px-3 font-bold" },
          Je = { class: "px-3" },
          Ne = { class: "flex items-end justify-end" },
          Ge = Te(() =>
            (0, n._)(
              "img",
              {
                src: "assets/imgs/CircleLeftArrow.svg",
                width: "30%",
                alt: "",
                class: "Child",
              },
              null,
              -1
            )
          ),
          Xe = [Ge],
          et = Te(() =>
            (0, n._)(
              "img",
              {
                src: "assets/imgs/CircleLeftArrow.svg",
                width: "30%",
                class: "rotate-180 Child",
                alt: "",
              },
              null,
              -1
            )
          ),
          tt = [et],
          st = Te(() =>
            (0, n._)(
              "div",
              { class: "w-[90%]" },
              [
                (0, n._)("img", {
                  src: "assets/imgs/testimonial.svg",
                  wi: "",
                  alt: "",
                }),
              ],
              -1
            )
          );
        function lt(e, t, s, l, a, r) {
          return (
            (0, n.wg)(),
            (0, n.iD)("section", Ve, [
              (0, n._)(
                "div",
                {
                  class: (0, g.C_)([
                    "container w-[100%] sm:mx-10 p-5",
                    { fade: l.FadeClass },
                  ]),
                  id: "Testimonial",
                },
                [
                  Ke,
                  Le,
                  $e,
                  ((0, n.wg)(!0),
                  (0, n.iD)(
                    n.HY,
                    null,
                    (0, n.Ko)(
                      l.Quotes,
                      (e, t) => (
                        (0, n.wg)(),
                        (0, n.iD)(
                          "div",
                          {
                            key: t,
                            class: (0, g.C_)({
                              mySlides: !0,
                              active: t === l.currentIndex,
                            }),
                          },
                          [
                            (0, n._)("p", Re, (0, g.zw)(e.Paragraph), 1),
                            (0, n._)("h1", Qe, (0, g.zw)(e.author), 1),
                            (0, n._)("h1", Je, (0, g.zw)(e.job), 1),
                          ],
                          2
                        )
                      )
                    ),
                    128
                  )),
                  (0, n._)("div", Ne, [
                    (0, n._)(
                      "div",
                      {
                        class:
                          "rounded-full flex items-center justify-center bg-[#D9D9D9] w-[40px] h-[40px] cursor-pointer mx-3 Parent",
                        onClick:
                          t[0] ||
                          (t[0] = (...e) => l.prevSlide && l.prevSlide(...e)),
                      },
                      Xe
                    ),
                    (0, n._)(
                      "div",
                      {
                        class:
                          "rounded-full flex items-center justify-center bg-[#D9D9D9] w-[40px] h-[40px] cursor-pointer mx-3 Parent",
                        onClick:
                          t[1] ||
                          (t[1] = (...e) => l.nextSlide && l.nextSlide(...e)),
                      },
                      tt
                    ),
                  ]),
                ],
                2
              ),
              st,
            ])
          );
        }
        var nt = {
          name: "Testimonials",
          setup() {
            const e = (0, x.iH)([
                {
                  Paragraph:
                    "We Provides Integrated Call Center Services In An Equipment And Software. We Provides Integrated Call Center Services In An Equipment And Software.",
                  author: "Mohammed Saleem",
                  job: "Customer Services",
                },
                {
                  Paragraph:
                    "We Provides Integrated Call Center Services In An Equipment And Software. We Provides Integrated Call Center Services In An Equipment And Software.",
                  author: "Sam Mohammed",
                  job: "Human recourses",
                },
                {
                  Paragraph:
                    "We Provides Integrated Call Center Services In An Equipment And Software. We Provides Integrated Call Center Services In An Equipment And Software.",
                  author: "Ali Monsoor",
                  job: "Customer Services",
                },
              ]),
              t = (0, x.iH)(!1),
              s = (0, x.iH)(0),
              l = () => {
                (s.value = (s.value + 1) % e.value.length),
                  (t.value = !0),
                  setTimeout(() => {
                    t.value = !1;
                  }, 1500);
              },
              n = () => {
                (s.value = (s.value - 1 + e.value.length) % e.value.length),
                  (t.value = !0),
                  setTimeout(() => {
                    t.value = !1;
                  }, 1500);
              };
            return {
              Quotes: e,
              currentIndex: s,
              nextSlide: l,
              prevSlide: n,
              FadeClass: t,
            };
          },
        };
        const at = (0, m.Z)(nt, [
          ["render", lt],
          ["__scopeId", "data-v-2ffc05d4"],
        ]);
        var rt = at;
        const ot = (0, n._)(
            "section",
            { id: "Our_Clients", class: "scroll-smooth" },
            [
              (0, n._)(
                "h5",
                {
                  class: "text-center text-[#F3AF1C] text-xl p-6 scroll-mb-32",
                },
                " Our Clients "
              ),
              (0, n._)(
                "h1",
                {
                  class:
                    "text-center sm:text-5xl/[40px] text-4xl font-bold text-[#0F113C] sm:mb-0 mb-5",
                },
                " clients who trust us "
              ),
            ],
            -1
          ),
          it = { class: "flex justify-center my-10 rounded text-white" },
          ct = (0, n._)(
            "img",
            {
              src: "assets/imgs/Al-Jammal.svg",
              class: "cursor-pointer mx-3",
              alt: "",
            },
            null,
            -1
          ),
          dt = (0, n._)(
            "img",
            {
              src: "assets/imgs/onesight.svg",
              class: "cursor-pointer mx-3",
              alt: "",
            },
            null,
            -1
          ),
          mt = (0, n._)(
            "img",
            {
              src: "assets/imgs/onesight.svg",
              class: "cursor-pointer mx-3",
              alt: "",
            },
            null,
            -1
          ),
          ut = (0, n._)(
            "img",
            {
              src: "assets/imgs/onesight.svg",
              class: "cursor-pointer mx-3",
              alt: "",
            },
            null,
            -1
          ),
          pt = (0, n._)(
            "img",
            {
              src: "assets/imgs/onesight.svg",
              class: "cursor-pointer mx-3",
              alt: "",
            },
            null,
            -1
          ),
          xt = (0, n._)(
            "img",
            {
              src: "assets/imgs/onesight.svg",
              class: "cursor-pointer mx-3",
              alt: "",
            },
            null,
            -1
          ),
          gt = (0, n._)(
            "img",
            {
              src: "assets/imgs/onesight.svg",
              class: "cursor-pointer mx-3",
              alt: "",
            },
            null,
            -1
          );
        function vt(e, t, s, l, a, r) {
          const o = (0, n.up)("swiper-slide"),
            i = (0, n.up)("swiper");
          return (
            (0, n.wg)(),
            (0, n.iD)(
              n.HY,
              null,
              [
                ot,
                (0, n._)("div", it, [
                  (0, n.Wm)(
                    i,
                    {
                      slidesPerView: 1,
                      breakpoints: {
                        "@0.00": { slidesPerView: 1, spaceBetween: 40 },
                        "@0.75": { slidesPerView: 2, spaceBetween: 20 },
                        "@1.00": { slidesPerView: 3, spaceBetween: 40 },
                        "@1.50": { slidesPerView: 4, spaceBetween: 50 },
                        "@2.00": { slidesPerView: 4, spaceBetween: 50 },
                        "@2.50": { slidesPerView: 4, spaceBetween: 50 },
                      },
                      modules: l.modules,
                      class: "mySwiper",
                    },
                    {
                      default: (0, n.w5)(() => [
                        (0, n.Wm)(o, null, {
                          default: (0, n.w5)(() => [ct]),
                          _: 1,
                        }),
                        (0, n.Wm)(o, null, {
                          default: (0, n.w5)(() => [dt]),
                          _: 1,
                        }),
                        (0, n.Wm)(o, null, {
                          default: (0, n.w5)(() => [mt]),
                          _: 1,
                        }),
                        (0, n.Wm)(o, null, {
                          default: (0, n.w5)(() => [ut]),
                          _: 1,
                        }),
                        (0, n.Wm)(o, null, {
                          default: (0, n.w5)(() => [pt]),
                          _: 1,
                        }),
                        (0, n.Wm)(o, null, {
                          default: (0, n.w5)(() => [xt]),
                          _: 1,
                        }),
                        (0, n.Wm)(o, null, {
                          default: (0, n.w5)(() => [gt]),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    },
                    8,
                    ["modules"]
                  ),
                ]),
              ],
              64
            )
          );
        }
        var Ct = s(552),
          ft = s(918),
          wt = {
            components: { Swiper: Ct.tq, SwiperSlide: Ct.o5 },
            setup() {
              return { modules: [ft.W_] };
            },
            data() {
              return {
                Attribute: "flex justify-center my-10 rounded text-white",
              };
            },
          };
        const ht = (0, m.Z)(wt, [["render", vt]]);
        var bt = ht,
          _t = {
            name: "MainPage",
            components: {
              HomeSection: G,
              CallCenter: ge,
              AboutSection: Se,
              Services: ze,
              Projects: Me,
              Testimonial: rt,
              Our_Clients: bt,
            },
          };
        const St = (0, m.Z)(_t, [["render", q]]);
        var yt = St,
          At = {
            name: "HomeView",
            components: { HeaderOne: W, MainPage: yt, FooterPage: p },
          };
        const kt = (0, m.Z)(At, [["render", O]]);
        var Dt = kt;
        const Ft = { key: 0 },
          Pt = {
            class:
              "min-w-4xl flex justify-between flex-col md:flex-row sm:mx-14",
            id: "Service",
          },
          It = { class: "container w-[100%] sm:mx-10" },
          Wt = (0, n._)(
            "h6",
            { class: "text-xl py-3 text-[#F3AF1C]" },
            "call center system",
            -1
          ),
          jt = { class: "sm:text-4xl text-4xl font-bold text-[#0F113C]" },
          zt = { class: "text-lg py-3 text-gray-600" },
          Ht = (0, n._)(
            "div",
            { class: "w-[90%] flex justify-center items-center" },
            [
              (0, n._)("img", {
                src: "assets/imgs/CallCenterPage.svg",
                alt: "",
              }),
            ],
            -1
          ),
          Ut = (0, n.uE)(
            '<section class="sm:w-[75%] sm:mx-[82px] mb-5 p-3"><h1 class="sm:text-5xl/[50px] text-4xl font-bold text-[#0F113C]"> main features </h1><div class="mt-10 grid sm:grid-cols-2"><div class="flex items-center my-4"><img src="assets/imgs/Features 1.svg" class="bg-[#F3AF1C] rounded-full p-3" alt=""><h1 class="text-xl font-bold mx-4">format partition</h1></div><div class="flex items-center my-4"><img src="assets/imgs/Features 2.svg" class="bg-[#F3AF1C] rounded-full p-3" alt=""><h1 class="text-xl font-bold mx-4"> create tasks </h1></div><div class="flex items-center my-4"><img src="assets/imgs/Features 3.svg" class="bg-[#F3AF1C] rounded-full p-3" alt=""><h1 class="text-xl font-bold mx-4"> Creating departments or services </h1></div><div class="flex items-center my-4"><img src="assets/imgs/Features 4.svg" class="bg-[#F3AF1C] rounded-full p-3" alt=""><h1 class="text-xl font-bold mx-4"> upload the numbers to be called as an excel file </h1></div><div class="flex items-center my-4"><img src="assets/imgs/Features 5.svg" class="bg-[#F3AF1C] rounded-full p-3" alt=""><h1 class="text-xl font-bold mx-4"> define questions and collect answer </h1></div></div></section>',
            1
          ),
          Et = { key: 1 };
        function Ot(e, t, s, l, a, r) {
          return (
            (0, n.wg)(),
            (0, n.iD)("div", null, [
              a.Service
                ? ((0, n.wg)(),
                  (0, n.iD)("div", Ft, [
                    (0, n._)("section", Pt, [
                      (0, n._)("div", It, [
                        Wt,
                        (0, n._)("h1", jt, (0, g.zw)(a.Service.title), 1),
                        (0, n._)("p", zt, (0, g.zw)(a.Service.paragraph), 1),
                      ]),
                      Ht,
                    ]),
                    Ut,
                  ]))
                : ((0, n.wg)(), (0, n.iD)("div", Et, " Data not found ")),
            ])
          );
        }
        var qt = {
          name: "CallCenter",
          props: ["id"],
          data() {
            return {
              Class: "bg-[#F3AF1C] rounded-full",
              Service: ae.y[this.id - 1],
            };
          },
        };
        const Bt = (0, m.Z)(qt, [["render", Ot]]);
        var Zt = Bt;
        const Yt = {
            class:
              "min-w-4xl flex justify-between flex-col md:flex-row sm:mx-14 p-3",
            id: "ContactUs",
          },
          Mt = (0, n.uE)(
            '<div class="container w-[100%] sm:mx-10"><h1 class="sm:text-4xl text-4xl font-bold text-[#0F113C]"> Contact us </h1><p class="text-lg py-3 text-gray-600 w-[80%]"> You can contact us to request a service or express your feelings through this form using social media links. </p><div class="flex flex-col"><div class="flex items-center my-4"><img src="assets/imgs/Location.svg" alt=""><h1 class="text-base mx-2">You can contact us to service</h1></div><div class="flex items-center my-4"><img src="assets/imgs/PhoneCall.svg" alt=""><h1 class="text-base mx-2">+679 77125590</h1></div><div class="flex items-center my-4"><img src="assets/imgs/Messgae.svg" alt=""><h1 class="text-base mx-2">temmam123@gmail.com</h1></div></div></div>',
            1
          ),
          Tt = { class: "" },
          Vt = (0, n._)(
            "input",
            {
              type: "text",
              id: "first_name",
              class:
                "bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3",
              placeholder: "Full Name",
              required: "",
            },
            null,
            -1
          ),
          Kt = (0, n._)(
            "input",
            {
              type: "text",
              id: "Email",
              class:
                "bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3",
              placeholder: "Your Email",
              required: "",
            },
            null,
            -1
          ),
          Lt = (0, n._)(
            "textarea",
            {
              name: "",
              id: "",
              class:
                "bg-white border p-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[552px] h-[161px] px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3",
              cols: "30",
              rows: "10",
              placeholder: "Your Email",
            },
            null,
            -1
          );
        function $t(e, t, s, l, a, r) {
          const o = (0, n.up)("Button");
          return (
            (0, n.wg)(),
            (0, n.iD)("section", Yt, [
              Mt,
              (0, n._)("div", Tt, [
                Vt,
                Kt,
                Lt,
                (0, n.Wm)(o, { class: (0, g.C_)(a.Class) }, null, 8, ["class"]),
              ]),
            ])
          );
        }
        var Rt = {
          name: "ContactUs",
          data() {
            return {
              text: "Save",
              Class:
                "font-bold w-full rounded-xl border border-solid border-slate-900 dark:border-none bg-[#0F136B] text-white p-3",
            };
          },
          components: { Button: Q },
        };
        const Qt = (0, m.Z)(Rt, [["render", $t]]);
        var Jt = Qt;
        const Nt = {
            class: "min-w-4xl flex flex-col sm:mx-14 p-3",
            id: "Services",
          },
          Gt = (0, n._)(
            "h5",
            { class: "text-center text-[#F3AF1C] text-xl p-6 scroll-mb-32" },
            " Features ",
            -1
          ),
          Xt = (0, n._)(
            "h1",
            {
              class:
                "text-center sm:text-5xl/[40px] text-4xl font-bold text-[#0F113C] sm:mb-0 mb-5 items-end",
            },
            " Features and Services ",
            -1
          ),
          es = (0, n.uE)(
            '<div class="cursor-pointer bg-white p-10 text-black rounded-xl flex flex-col sm:flex-row shadow-md sm:w-1/2 mb-3"><img src="assets/imgs/CallCenter.svg" class="w-[80px] h-[80px] self-center mx-3" alt=""><div class="mx-4"><h2 class="text-xl py-3 font-extrabold">call center system</h2><p class="text-lg font-normal w-[80%]"> We Provide Integrated Call Center Services In Equipment And Software </p></div></div>',
            1
          );
        function ts(e, t, s, l, a, r) {
          const o = (0, n.up)("Card");
          return (
            (0, n.wg)(),
            (0, n.iD)("section", Nt, [
              Gt,
              Xt,
              ((0, n.wg)(!0),
              (0, n.iD)(
                n.HY,
                null,
                (0, n.Ko)(
                  a.Services,
                  (e, t) => (
                    (0, n.wg)(),
                    (0, n.j4)(
                      o,
                      {
                        ImgClass: a.Class,
                        ParClass: a.ParClass,
                        key: t,
                        Contents: e,
                        class: (0, g.C_)({
                          "self-start": t % 2 === 0,
                          "self-end": t % 2 !== 0,
                        }),
                      },
                      null,
                      8,
                      ["ImgClass", "ParClass", "Contents", "class"]
                    )
                  )
                ),
                128
              )),
              es,
            ])
          );
        }
        var ss = {
          data() {
            return {
              Services: [],
              Class: "w-[80px] h-[80px] self-center mx-5",
              ParClass:
                "cursor-pointer mt-5  bg-white p-10 text-black rounded-xl flex flex-col sm:flex-row items-start shadow-md sm:w-1/2 mb-3",
            };
          },
          components: { Card: ue },
          mounted() {
            fetch("http://localhost:3000/Services")
              .then((e) => e.json())
              .then((e) => (this.Services = e))
              .catch((e) => console.log(e.message));
          },
        };
        const ls = (0, m.Z)(ss, [["render", ts]]);
        var ns = ls;
        const as = [
            { path: "/", name: "home", component: Dt },
            {
              path: "/callcenter/:id",
              name: "CallCenter",
              component: Zt,
              props: !0,
            },
            { path: "/ContactUs", name: "ContactUs", component: Jt, props: !0 },
            { path: "/Services", name: "Services", component: ns, props: !0 },
          ],
          rs = (0, U.p7)({
            history: (0, U.PO)("/temmam_frontend/"),
            routes: as,
          });
        var os = rs,
          is = s(907),
          cs = (0, is.MT)({
            state: {},
            getters: {},
            mutations: {},
            actions: {},
            modules: {},
          });
        (0, l.ri)(H).use(cs).use(os).mount("#app");
      },
    },
    t = {};
  function s(l) {
    var n = t[l];
    if (void 0 !== n) return n.exports;
    var a = (t[l] = { exports: {} });
    return e[l](a, a.exports, s), a.exports;
  }
  (s.m = e),
    (function () {
      var e = [];
      s.O = function (t, l, n, a) {
        if (!l) {
          var r = 1 / 0;
          for (d = 0; d < e.length; d++) {
            (l = e[d][0]), (n = e[d][1]), (a = e[d][2]);
            for (var o = !0, i = 0; i < l.length; i++)
              (!1 & a || r >= a) &&
              Object.keys(s.O).every(function (e) {
                return s.O[e](l[i]);
              })
                ? l.splice(i--, 1)
                : ((o = !1), a < r && (r = a));
            if (o) {
              e.splice(d--, 1);
              var c = n();
              void 0 !== c && (t = c);
            }
          }
          return t;
        }
        a = a || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > a; d--) e[d] = e[d - 1];
        e[d] = [l, n, a];
      };
    })(),
    (function () {
      s.d = function (e, t) {
        for (var l in t)
          s.o(t, l) &&
            !s.o(e, l) &&
            Object.defineProperty(e, l, { enumerable: !0, get: t[l] });
      };
    })(),
    (function () {
      s.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = { 143: 0 };
      s.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, l) {
          var n,
            a,
            r = l[0],
            o = l[1],
            i = l[2],
            c = 0;
          if (
            r.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (n in o) s.o(o, n) && (s.m[n] = o[n]);
            if (i) var d = i(s);
          }
          for (t && t(l); c < r.length; c++)
            (a = r[c]), s.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return s.O(d);
        },
        l = (self["webpackChunktemmam_frontend"] =
          self["webpackChunktemmam_frontend"] || []);
      l.forEach(t.bind(null, 0)), (l.push = t.bind(null, l.push.bind(l)));
    })();
  var l = s.O(void 0, [998], function () {
    return s(873);
  });
  l = s.O(l);
})();
//# sourceMappingURL=app.0eab9b6b.js.map
