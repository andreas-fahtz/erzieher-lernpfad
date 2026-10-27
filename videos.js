/* videos.js – zentrale Video-IDs für erzieher-lernpfad.de (angelegt 26.10.2026)
   ====================================================================================
   SO PFLEGST DU DIESE DATEI (nur im Teil DATEN, darunter nichts ändern):
   1. Ein Lernvideo ist auf YouTube online -> bei der Folge die YouTube-ID eintragen.
      Die ID sind die 11 Zeichen am Ende der Adresse:
      https://www.youtube.com/watch?v=AbCdEfGhIjK  ->  "E-17": "AbCdEfGhIjK"
   2. Datei speichern und bei IONOS hochladen (vorhandene Datei überschreiben).
      Die Folgenseiten selbst müssen dafür NICHT neu hochgeladen werden.
   Was die Seiten automatisch anzeigen:
   - ID eingetragen  -> Knopf „Video laden (YouTube)“ (lädt erst nach Klick, youtube-nocookie.com)
                        und auf der Startseite die Marke „Video“ neben der Folge
   - ID leer ("")    -> Hinweis „Das Video erscheint bald auf YouTube @erzieherlernpfad“
   ==================================================================================== */

/* ---------- DATEN: YouTube-ID je Folge ---------- */
var EL_VIDEOS = {
  "E-01": "", "E-02": "", "E-03": "", "E-04": "", "E-05": "", "E-06": "",
  "E-07": "", "E-08": "", "E-09": "", "E-10": "", "E-11": "", "E-12": "",
  "E-13": "", "E-14": "", "E-15": "", "E-16": "", "E-17": "", "E-18": "",
  "E-19": "", "E-20": "", "E-21": "", "E-22": "", "E-23": "", "E-24": "",
  "E-25": "", "E-26": "", "E-27": "", "E-28": "", "E-29": "", "E-30": "",
  "E-31": "", "E-32": "", "E-33": "", "E-34": "", "E-35": "", "E-36": "",
  "E-37": "", "E-38": "", "E-39": "", "E-40": "", "E-41": "", "E-42": "",
  "E-43": "", "E-44": "", "E-45": "", "E-46": "", "E-47": "", "E-48": "",
  "E-49": "", "E-50": "", "E-51": "", "E-52": "", "E-53": "", "E-54": "",
  "E-55": "", "E-56": "", "E-57": "", "E-58": "", "E-59": "", "E-60": "",
  "E-61": "", "E-62": "", "E-63": "", "E-64": "", "E-65": "", "E-66": "",
  "E-67": "", "E-68": "", "E-69": "", "E-70": "", "E-71": "", "E-72": "",
  "E-73": "", "E-74": "", "E-75": "", "E-76": "", "E-77": "", "E-78": "",
  "E-79": "", "E-80": "", "E-81": "", "E-82": "", "E-83": "", "E-84": "",
  "E-85": "", "E-86": "", "E-87": "", "E-88": "", "E-89": "", "E-90": "",
  "E-91": "", "E-92": "", "E-93": "", "E-94": "", "E-95": "", "E-96": "",
  "E-97": "", "E-98": "", "E-99": ""
};

/* ==================== Ab hier nichts ändern ==================== */
(function () {
  function idOk(id) { return /^[A-Za-z0-9_-]{11}$/.test(id || ""); }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

  /* 1) Video-Kasten auf den Folgenseiten */
  var boxes = document.querySelectorAll(".vid[data-e]");
  for (var i = 0; i < boxes.length; i++) (function (v) {
    var id = EL_VIDEOS[v.getAttribute("data-e")];
    if (!idOk(id)) return; /* Hinweis „erscheint bald“ steht schon im HTML */
    var titel = v.getAttribute("data-titel") || "Lernvideo";
    v.innerHTML = '<div class="play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z" fill="#f2b63f"/></svg></div>' +
      '<div class="vtext"><b>Lernvideo zu dieser Folge</b>' + esc(titel) + ' · auf YouTube bei @erzieherlernpfad</div>' +
      '<button type="button">Video laden (YouTube)</button>' +
      '<small>Beim Laden werden Daten an YouTube (Google) übertragen – erst nach deinem Klick. Mehr in der <a href="datenschutz.html">Datenschutzerklärung</a>.</small>';
    v.querySelector("button").addEventListener("click", function () {
      v.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&amp;rel=0" title="Video: ' + esc(titel) +
        '" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
      v.style.padding = "0"; v.className += " laeuft";
    });
  })(boxes[i]);

  /* 2) Startseite: Marke „Video“ bei Folgen, deren Video online ist */
  var links = document.querySelectorAll("[data-e-liste]");
  for (var j = 0; j < links.length; j++) {
    if (idOk(EL_VIDEOS[links[j].getAttribute("data-e-liste")])) {
      var s = document.createElement("span");
      s.className = "vbadge"; s.textContent = "Video";
      links[j].lastChild.appendChild(s);
    }
  }
})();
