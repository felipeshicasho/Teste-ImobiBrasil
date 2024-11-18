parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    NmDP: [
      function (require, module, exports) {
        var e = document.querySelector(".menu"),
          t = document.querySelector(".exit"),
          c = document.querySelector(".navbar-links"),
          i = document.querySelector(".see-all"),
          s = document.querySelectorAll(".recently-item-hidden"),
          n = document.querySelectorAll(".search-tabs li"),
          a = document.querySelectorAll(".search form"),
          l = document.querySelector(".rent"),
          r = document.querySelector(".buy"),
          o = document.querySelector(".sell");
        e.addEventListener("click", function () {
          (e.style.display = "none"), c.classList.add("navbar-mobile");
        }),
          t.addEventListener("click", function () {
            c.classList.remove("navbar-mobile"), (e.style.display = "");
          }),
          window.addEventListener("resize", function () {
            window.innerWidth > 767
              ? c.classList.remove("navbar-mobile")
              : (e.style.display = "");
          }),
          n.forEach(function (e) {
            e.addEventListener("click", function () {
              var t = document.querySelector(e.dataset.target);
              a.forEach(function (e) {
                e == t
                  ? e.classList.add("visible")
                  : e.classList.remove("visible");
              });
            });
          }),
          l.addEventListener("click", function () {
            l.classList.add("active"),
              r.classList.remove("active"),
              o.classList.remove("active");
          }),
          r.addEventListener("click", function () {
            r.classList.add("active"),
              l.classList.remove("active"),
              o.classList.remove("active");
          }),
          o.addEventListener("click", function () {
            o.classList.add("active"),
              r.classList.remove("active"),
              l.classList.remove("active");
          }),
          i.addEventListener("click", function (e) {
            e.preventDefault(),
              s.forEach(function (e) {
                e.className = "recently-item";
              });
          });
      },
      {},
    ],
  },
  {},
  ["NmDP"],
  null
);


// 1. Alterar o Texto na Seção "HOME":
document.querySelector('h1').innerText = "Bem vindo ao Nosso Site";

// Caso tivesse mais que um H1: 
// const h1Elements = document.querySelectorAll('h1');
// h1Elements[0].innerText = "Bem-vindo ao Nosso Site";

// 2. Alterar Imagem:
const image = document.querySelector('.hero-content');
image.style.backgroundImage = "url('https://mortgagesolutions.net/wp-content/uploads/fha-mortgage-rent-out-home-scaled.jpg')";

// 3. Esconder Elemento:
const availability = document.querySelector('.availability-content');
availability.style.display = "none";

// 4. Estilizar um Parágrafo no Rodapé:
const footer = document.querySelector('.footer-head');
const lastP = footer.querySelector('p');
lastP.style.fontWeight = 'bold';
lastP.style.color = 'green'

// 5. Mover Elemento:
const find = document.querySelector('.find');
// Reaproveitei a variavél do AVIABILITY para posicionar a classe find antes dela.
availability.parentNode.insertBefore(find, availability);

// 6. Adicionar Comportamento ao Botão "CONTACT US":
// Novamente reaproveitei a variável já utilizada acima... 
const button_contact_us = find.querySelector('a');
button_contact_us.id = "btn-contact";
button_contact_us.addEventListener('click', () => {
  alert("O botão foi acionado");
})

const locationSelect = document.querySelector('[name="location"]');
const newOption = document.createElement('option');
newOption.value = "Presidente Prudente";
newOption.textContent = "Presidente Prudente";
locationSelect.appendChild(newOption);

// OU

const novaOpcao = "<option value='São Paulo'>São Paulo</option>"
locationSelect.innerHTML += novaOpcao;

// 8. Adicionar Item no Menu de Navegação:

// Busca a navbar com a UL
const navbar_list = document.querySelector(".navbar-list");
// Cria a variável com uma LI
const newItemList = document.createElement("li");
// Cria os atributos de um link 
const newLink = document.createElement("a");
newLink.href = "#"; 
newLink.textContent = "ABOUT US"; 
// Cria uma nova LI dentro da UL
navbar_list.appendChild(newItemList);
// Cria um link dentro da LI 
newItemList.appendChild(newLink);
// Move o LI "About us" 
listNavbar_list = navbar_list.querySelectorAll("li");
listNavbar_list[4].parentNode.insertBefore(listNavbar_list[5], listNavbar_list[4]);


// 9. Validação de Formulário no Rodapé:
footer_subscribe = document.querySelector(".footer-subscribe");
const input_email = footer_subscribe.querySelector("[type='text']");
const button_email = footer_subscribe.querySelector("button");
button_email.addEventListener('click', () => {
  if(input_email.value == ""){
    alert("Insira o email no campo.")
  }   
})