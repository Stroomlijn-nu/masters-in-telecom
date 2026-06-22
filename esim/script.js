document.documentElement.className+=' js';

// ===== HEADER: scroll shadow =====
// Adds 'scrolled' class to header when user scrolls down
var hdr = document.getElementById('hdr');
window.addEventListener('scroll', function() {
  hdr.classList.toggle('scrolled', window.scrollY > 10);
});

// ===== MOBILE MENU: open/close =====
// Toggles the mobile panel on burger click
var burger = document.getElementById('burger');
var mpanel = document.getElementById('mpanel');
burger.addEventListener('click', function() {
  mpanel.classList.toggle('open');
});

// ===== MOBILE SUBMENU: Diensten =====
// Toggles the Diensten sub-list inside the mobile panel
document.getElementById('msubbtn').addEventListener('click', function() {
  document.getElementById('msublist').classList.toggle('open');
});

// Close mobile menu when any link inside it is clicked
mpanel.querySelectorAll('a').forEach(function(a) {
  a.addEventListener('click', function() { mpanel.classList.remove('open'); });
});

// ===== SCROLL REVEAL =====
// Observes .reveal elements and adds .in class when they enter the viewport
var io = new IntersectionObserver(function(es) {
  es.forEach(function(e) {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(function(el) { io.observe(el); });

// ===== eSIM PRICE TABLE =====
// Purpose: Renders a filterable, sortable price table from Google Sheet CSV
// Falls back to hardcoded data if the sheet cannot be fetched

var SHEET_ID = "1kB37B9twdCu330_ahUBOfSEo8SxT8qhU3w_bS6mnNwg";
var GVIZ = "https://docs.google.com/spreadsheets/d/" + SHEET_ID + "/gviz/tq?tqx=out:csv&gid=2128109227";
var FALLBACK = [{"land":"Afghanistan","data":"10GB","prijs":"90","dagen":"30"},{"land":"Afghanistan","data":"5GB","prijs":"54","dagen":"30"},{"land":"Albania","data":"10GB","prijs":"29","dagen":"30"},{"land":"Albania","data":"5GB","prijs":"23","dagen":"30"},{"land":"Algeria","data":"10GB","prijs":"38","dagen":"30"},{"land":"Algeria","data":"5GB","prijs":"27","dagen":"30"},{"land":"Andorra","data":"10GB","prijs":"48","dagen":"30"},{"land":"Andorra","data":"5GB","prijs":"33","dagen":"30"},{"land":"Antigua and Barbuda","data":"10GB","prijs":"63","dagen":"30"},{"land":"Antigua and Barbuda","data":"5GB","prijs":"40","dagen":"30"},{"land":"Argentina","data":"10GB","prijs":"52","dagen":"30"},{"land":"Argentina","data":"5GB","prijs":"34","dagen":"30"},{"land":"Armenia","data":"10GB","prijs":"75","dagen":"30"},{"land":"Armenia","data":"5GB","prijs":"47","dagen":"30"},{"land":"Australia","data":"10GB","prijs":"44","dagen":"30"},{"land":"Australia","data":"5GB","prijs":"30","dagen":"30"},{"land":"Austria","data":"10GB","prijs":"30","dagen":"30"},{"land":"Austria","data":"5GB","prijs":"23","dagen":"30"},{"land":"Azerbaijan","data":"10GB","prijs":"45","dagen":"30"},{"land":"Azerbaijan","data":"5GB","prijs":"31","dagen":"30"},{"land":"Bahamas","data":"10GB","prijs":"109","dagen":"30"},{"land":"Bahamas","data":"5GB","prijs":"64","dagen":"30"},{"land":"Bahrain","data":"10GB","prijs":"60","dagen":"30"},{"land":"Bahrain","data":"5GB","prijs":"39","dagen":"30"},{"land":"Bangladesh","data":"10GB","prijs":"94","dagen":"30"},{"land":"Bangladesh","data":"5GB","prijs":"56","dagen":"30"},{"land":"Barbados","data":"10GB","prijs":"85","dagen":"30"},{"land":"Barbados","data":"5GB","prijs":"52","dagen":"30"},{"land":"Belarus","data":"10GB","prijs":"39","dagen":"30"},{"land":"Belarus","data":"5GB","prijs":"28","dagen":"30"},{"land":"Belgium","data":"10GB","prijs":"31","dagen":"30"},{"land":"Belgium","data":"5GB","prijs":"24","dagen":"30"},{"land":"Belize","data":"10GB","prijs":"178","dagen":"30"},{"land":"Belize","data":"5GB","prijs":"100","dagen":"30"},{"land":"Bolivia","data":"10GB","prijs":"108","dagen":"30"},{"land":"Bolivia","data":"5GB","prijs":"64","dagen":"30"},{"land":"Bosnia and Herzegovina","data":"10GB","prijs":"41","dagen":"30"},{"land":"Bosnia and Herzegovina","data":"5GB","prijs":"29","dagen":"30"},{"land":"Brazil","data":"10GB","prijs":"46","dagen":"30"},{"land":"Brazil","data":"5GB","prijs":"31","dagen":"30"},{"land":"British Virgin Islands","data":"10GB","prijs":"88","dagen":"30"},{"land":"British Virgin Islands","data":"5GB","prijs":"53","dagen":"30"},{"land":"Bulgaria","data":"10GB","prijs":"31","dagen":"30"},{"land":"Bulgaria","data":"5GB","prijs":"23","dagen":"30"},{"land":"Cambodia","data":"10GB","prijs":"227","dagen":"30"},{"land":"Cambodia","data":"5GB","prijs":"126","dagen":"30"},{"land":"Canada","data":"10GB","prijs":"68","dagen":"30"},{"land":"Canada","data":"5GB","prijs":"43","dagen":"30"},{"land":"Chad","data":"10GB","prijs":"87","dagen":"30"},{"land":"Chad","data":"5GB","prijs":"53","dagen":"30"},{"land":"Chile","data":"10GB","prijs":"54","dagen":"30"},{"land":"Chile","data":"5GB","prijs":"35","dagen":"30"},{"land":"Colombia","data":"10GB","prijs":"95","dagen":"30"},{"land":"Colombia","data":"5GB","prijs":"57","dagen":"30"},{"land":"Congo","data":"10GB","prijs":"89","dagen":"30"},{"land":"Congo","data":"5GB","prijs":"54","dagen":"30"},{"land":"Costa Rica","data":"10GB","prijs":"53","dagen":"30"},{"land":"Costa Rica","data":"5GB","prijs":"35","dagen":"30"},{"land":"Croatia","data":"10GB","prijs":"29","dagen":"30"},{"land":"Croatia","data":"5GB","prijs":"22","dagen":"30"},{"land":"Cyprus","data":"10GB","prijs":"37","dagen":"30"},{"land":"Cyprus","data":"5GB","prijs":"27","dagen":"30"},{"land":"Czech Republic","data":"10GB","prijs":"30","dagen":"30"},{"land":"Czech Republic","data":"5GB","prijs":"23","dagen":"30"},{"land":"Democratic Republic of the Congo","data":"10GB","prijs":"87","dagen":"30"},{"land":"Democratic Republic of the Congo","data":"5GB","prijs":"53","dagen":"30"},{"land":"Denmark","data":"10GB","prijs":"30","dagen":"30"},{"land":"Denmark","data":"5GB","prijs":"23","dagen":"30"},{"land":"Dominica","data":"10GB","prijs":"89","dagen":"30"},{"land":"Dominica","data":"5GB","prijs":"54","dagen":"30"},{"land":"Dominican Republic","data":"10GB","prijs":"120","dagen":"30"},{"land":"Dominican Republic","data":"5GB","prijs":"70","dagen":"30"},{"land":"Ecuador","data":"10GB","prijs":"57","dagen":"30"},{"land":"Ecuador","data":"5GB","prijs":"37","dagen":"30"},{"land":"Egypt","data":"10GB","prijs":"62","dagen":"30"},{"land":"Egypt","data":"5GB","prijs":"40","dagen":"30"},{"land":"El Salvador","data":"10GB","prijs":"94","dagen":"30"},{"land":"El Salvador","data":"5GB","prijs":"56","dagen":"30"},{"land":"Estonia","data":"10GB","prijs":"29","dagen":"30"},{"land":"Estonia","data":"5GB","prijs":"23","dagen":"30"},{"land":"Faroe Islands","data":"10GB","prijs":"46","dagen":"30"},{"land":"Faroe Islands","data":"5GB","prijs":"31","dagen":"30"},{"land":"Finland","data":"10GB","prijs":"31","dagen":"30"},{"land":"Finland","data":"5GB","prijs":"23","dagen":"30"},{"land":"France","data":"10GB","prijs":"30","dagen":"30"},{"land":"France","data":"5GB","prijs":"23","dagen":"30"},{"land":"Gabon","data":"10GB","prijs":"87","dagen":"30"},{"land":"Gabon","data":"5GB","prijs":"53","dagen":"30"},{"land":"Georgia","data":"10GB","prijs":"38","dagen":"30"},{"land":"Georgia","data":"5GB","prijs":"27","dagen":"30"},{"land":"Germany","data":"10GB","prijs":"31","dagen":"30"},{"land":"Germany","data":"5GB","prijs":"23","dagen":"30"},{"land":"Ghana","data":"10GB","prijs":"50","dagen":"30"},{"land":"Ghana","data":"5GB","prijs":"34","dagen":"30"},{"land":"Gibraltar","data":"10GB","prijs":"55","dagen":"30"},{"land":"Gibraltar","data":"5GB","prijs":"36","dagen":"30"},{"land":"Greece","data":"10GB","prijs":"31","dagen":"30"},{"land":"Greece","data":"5GB","prijs":"24","dagen":"30"},{"land":"Grenada","data":"10GB","prijs":"89","dagen":"30"},{"land":"Grenada","data":"5GB","prijs":"54","dagen":"30"},{"land":"Guadeloupe","data":"10GB","prijs":"91","dagen":"30"},{"land":"Guadeloupe","data":"5GB","prijs":"55","dagen":"30"},{"land":"Guatemala","data":"10GB","prijs":"119","dagen":"30"},{"land":"Guatemala","data":"5GB","prijs":"69","dagen":"30"},{"land":"Guyana","data":"10GB","prijs":"269","dagen":"30"},{"land":"Guyana","data":"5GB","prijs":"147","dagen":"30"},{"land":"Honduras","data":"10GB","prijs":"103","dagen":"30"},{"land":"Honduras","data":"5GB","prijs":"61","dagen":"30"},{"land":"Hong-Kong","data":"10GB","prijs":"55","dagen":"30"},{"land":"Hong-Kong","data":"5GB","prijs":"36","dagen":"30"},{"land":"Hungary","data":"10GB","prijs":"31","dagen":"30"},{"land":"Hungary","data":"5GB","prijs":"24","dagen":"30"},{"land":"Iceland","data":"10GB","prijs":"41","dagen":"30"},{"land":"Iceland","data":"5GB","prijs":"29","dagen":"30"},{"land":"India","data":"10GB","prijs":"59","dagen":"30"},{"land":"India","data":"5GB","prijs":"38","dagen":"30"},{"land":"Indonesia","data":"10GB","prijs":"30","dagen":"30"},{"land":"Indonesia","data":"5GB","prijs":"23","dagen":"30"},{"land":"Iran","data":"10GB","prijs":"94","dagen":"30"},{"land":"Iran","data":"5GB","prijs":"56","dagen":"30"},{"land":"Iraq","data":"10GB","prijs":"52","dagen":"30"},{"land":"Iraq","data":"5GB","prijs":"34","dagen":"30"},{"land":"Ireland","data":"10GB","prijs":"31","dagen":"30"},{"land":"Ireland","data":"5GB","prijs":"24","dagen":"30"},{"land":"Israel","data":"10GB","prijs":"36","dagen":"30"},{"land":"Israel","data":"5GB","prijs":"26","dagen":"30"},{"land":"Italy","data":"10GB","prijs":"30","dagen":"30"},{"land":"Italy","data":"5GB","prijs":"23","dagen":"30"},{"land":"Jamaica","data":"10GB","prijs":"101","dagen":"30"},{"land":"Jamaica","data":"5GB","prijs":"60","dagen":"30"},{"land":"Japan","data":"10GB","prijs":"80","dagen":"30"},{"land":"Japan","data":"5GB","prijs":"49","dagen":"30"},{"land":"Jordan","data":"10GB","prijs":"97","dagen":"30"},{"land":"Jordan","data":"5GB","prijs":"58","dagen":"30"},{"land":"Kazakhstan","data":"10GB","prijs":"31","dagen":"30"},{"land":"Kazakhstan","data":"5GB","prijs":"24","dagen":"30"},{"land":"Kenya","data":"10GB","prijs":"68","dagen":"30"},{"land":"Kenya","data":"5GB","prijs":"43","dagen":"30"},{"land":"Kosovo","data":"10GB","prijs":"46","dagen":"30"},{"land":"Kosovo","data":"5GB","prijs":"31","dagen":"30"},{"land":"Kuwait","data":"10GB","prijs":"36","dagen":"30"},{"land":"Kuwait","data":"5GB","prijs":"26","dagen":"30"},{"land":"Kyrgyzstan","data":"10GB","prijs":"30","dagen":"30"},{"land":"Kyrgyzstan","data":"5GB","prijs":"23","dagen":"30"},{"land":"Latvia","data":"10GB","prijs":"33","dagen":"30"},{"land":"Latvia","data":"5GB","prijs":"25","dagen":"30"},{"land":"Liechtenstein","data":"10GB","prijs":"30","dagen":"30"},{"land":"Liechtenstein","data":"5GB","prijs":"23","dagen":"30"},{"land":"Lithuania","data":"10GB","prijs":"33","dagen":"30"},{"land":"Lithuania","data":"5GB","prijs":"24","dagen":"30"},{"land":"Luxembourg","data":"10GB","prijs":"30","dagen":"30"},{"land":"Luxembourg","data":"5GB","prijs":"23","dagen":"30"},{"land":"Macau","data":"10GB","prijs":"40","dagen":"30"},{"land":"Macau","data":"5GB","prijs":"28","dagen":"30"},{"land":"Madagascar","data":"10GB","prijs":"72","dagen":"30"},{"land":"Madagascar","data":"5GB","prijs":"45","dagen":"30"},{"land":"Malawi","data":"10GB","prijs":"77","dagen":"30"},{"land":"Malawi","data":"5GB","prijs":"47","dagen":"30"},{"land":"Malaysia","data":"10GB","prijs":"35","dagen":"30"},{"land":"Malaysia","data":"5GB","prijs":"26","dagen":"30"},{"land":"Malta","data":"10GB","prijs":"30","dagen":"30"},{"land":"Malta","data":"5GB","prijs":"23","dagen":"30"},{"land":"Mauritius","data":"10GB","prijs":"82","dagen":"30"},{"land":"Mauritius","data":"5GB","prijs":"50","dagen":"30"},{"land":"Mexico","data":"10GB","prijs":"59","dagen":"30"},{"land":"Mexico","data":"5GB","prijs":"38","dagen":"30"},{"land":"Moldova","data":"10GB","prijs":"29","dagen":"30"},{"land":"Moldova","data":"5GB","prijs":"22","dagen":"30"},{"land":"Mongolia","data":"10GB","prijs":"111","dagen":"30"},{"land":"Mongolia","data":"5GB","prijs":"65","dagen":"30"},{"land":"Montenegro","data":"10GB","prijs":"29","dagen":"30"},{"land":"Montenegro","data":"5GB","prijs":"23","dagen":"30"},{"land":"Montserrat","data":"10GB","prijs":"85","dagen":"30"},{"land":"Montserrat","data":"5GB","prijs":"52","dagen":"30"},{"land":"Morocco","data":"10GB","prijs":"69","dagen":"30"},{"land":"Morocco","data":"5GB","prijs":"44","dagen":"30"},{"land":"Nepal","data":"10GB","prijs":"72","dagen":"30"},{"land":"Nepal","data":"5GB","prijs":"45","dagen":"30"},{"land":"Netherlands","data":"10GB","prijs":"31","dagen":"30"},{"land":"Netherlands","data":"5GB","prijs":"24","dagen":"30"},{"land":"Netherlands Antilles","data":"10GB","prijs":"84","dagen":"30"},{"land":"Netherlands Antilles","data":"5GB","prijs":"51","dagen":"30"},{"land":"New Zealand","data":"10GB","prijs":"31","dagen":"30"},{"land":"New Zealand","data":"5GB","prijs":"24","dagen":"30"},{"land":"Nicaragua","data":"10GB","prijs":"103","dagen":"30"},{"land":"Nicaragua","data":"5GB","prijs":"61","dagen":"30"},{"land":"Niger","data":"10GB","prijs":"78","dagen":"30"},{"land":"Niger","data":"5GB","prijs":"48","dagen":"30"},{"land":"Nigeria","data":"10GB","prijs":"60","dagen":"30"},{"land":"Nigeria","data":"5GB","prijs":"39","dagen":"30"},{"land":"North Macedonia","data":"10GB","prijs":"42","dagen":"30"},{"land":"North Macedonia","data":"5GB","prijs":"29","dagen":"30"},{"land":"Norway","data":"10GB","prijs":"31","dagen":"30"},{"land":"Norway","data":"5GB","prijs":"24","dagen":"30"},{"land":"Pakistan","data":"10GB","prijs":"33","dagen":"30"},{"land":"Pakistan","data":"5GB","prijs":"25","dagen":"30"},{"land":"Palestine","data":"10GB","prijs":"140","dagen":"30"},{"land":"Palestine","data":"5GB","prijs":"80","dagen":"30"},{"land":"Panama","data":"10GB","prijs":"72","dagen":"30"},{"land":"Panama","data":"5GB","prijs":"45","dagen":"30"},{"land":"Paraguay","data":"10GB","prijs":"94","dagen":"30"},{"land":"Paraguay","data":"5GB","prijs":"56","dagen":"30"},{"land":"Peru","data":"5GB","prijs":"50","dagen":"30"},{"land":"Philippines","data":"10GB","prijs":"33","dagen":"30"},{"land":"Philippines","data":"5GB","prijs":"26","dagen":"30"},{"land":"Poland","data":"10GB","prijs":"31","dagen":"30"},{"land":"Poland","data":"5GB","prijs":"24","dagen":"30"},{"land":"Portugal","data":"10GB","prijs":"32","dagen":"30"},{"land":"Portugal","data":"5GB","prijs":"24","dagen":"30"},{"land":"Puerto Rico","data":"10GB","prijs":"89","dagen":"30"},{"land":"Puerto Rico","data":"5GB","prijs":"54","dagen":"30"},{"land":"Qatar","data":"10GB","prijs":"46","dagen":"30"},{"land":"Qatar","data":"5GB","prijs":"31","dagen":"30"},{"land":"Romania","data":"10GB","prijs":"31","dagen":"30"},{"land":"Romania","data":"5GB","prijs":"24","dagen":"30"},{"land":"R\u00e9union","data":"10GB","prijs":"40","dagen":"30"},{"land":"R\u00e9union","data":"5GB","prijs":"28","dagen":"30"},{"land":"Saudi Arabia","data":"10GB","prijs":"60","dagen":"30"},{"land":"Saudi Arabia","data":"5GB","prijs":"39","dagen":"30"},{"land":"Senegal","data":"10GB","prijs":"115","dagen":"30"},{"land":"Senegal","data":"5GB","prijs":"67","dagen":"30"},{"land":"Serbia","data":"10GB","prijs":"41","dagen":"30"},{"land":"Serbia","data":"5GB","prijs":"29","dagen":"30"},{"land":"Singapore","data":"10GB","prijs":"42","dagen":"30"},{"land":"Singapore","data":"5GB","prijs":"29","dagen":"30"},{"land":"Slovakia","data":"10GB","prijs":"30","dagen":"30"},{"land":"Slovakia","data":"5GB","prijs":"23","dagen":"30"},{"land":"Slovenia","data":"10GB","prijs":"30","dagen":"30"},{"land":"Slovenia","data":"5GB","prijs":"23","dagen":"30"},{"land":"South Africa","data":"10GB","prijs":"75","dagen":"30"},{"land":"South Africa","data":"5GB","prijs":"46","dagen":"30"},{"land":"South Korea","data":"10GB","prijs":"62","dagen":"30"},{"land":"South Korea","data":"5GB","prijs":"40","dagen":"30"},{"land":"Spain","data":"10GB","prijs":"31","dagen":"30"},{"land":"Spain","data":"5GB","prijs":"24","dagen":"30"},{"land":"Sri Lanka","data":"10GB","prijs":"48","dagen":"30"},{"land":"Sri Lanka","data":"5GB","prijs":"32","dagen":"30"},{"land":"Sudan","data":"10GB","prijs":"153","dagen":"30"},{"land":"Sudan","data":"5GB","prijs":"87","dagen":"30"},{"land":"Sweden","data":"10GB","prijs":"33","dagen":"30"},{"land":"Sweden","data":"5GB","prijs":"24","dagen":"30"},{"land":"Switzerland","data":"10GB","prijs":"31","dagen":"30"},{"land":"Switzerland","data":"5GB","prijs":"24","dagen":"30"},{"land":"Taiwan","data":"10GB","prijs":"42","dagen":"30"},{"land":"Taiwan","data":"5GB","prijs":"29","dagen":"30"},{"land":"Tanzania","data":"10GB","prijs":"81","dagen":"30"},{"land":"Tanzania","data":"5GB","prijs":"50","dagen":"30"},{"land":"Thailand","data":"10GB","prijs":"53","dagen":"30"},{"land":"Thailand","data":"5GB","prijs":"35","dagen":"30"},{"land":"Tunisia","data":"10GB","prijs":"42","dagen":"30"},{"land":"Tunisia","data":"5GB","prijs":"30","dagen":"30"},{"land":"Turkey","data":"10GB","prijs":"30","dagen":"30"},{"land":"Turkey","data":"5GB","prijs":"28","dagen":"30"},{"land":"Uganda","data":"10GB","prijs":"84","dagen":"30"},{"land":"Uganda","data":"5GB","prijs":"51","dagen":"30"},{"land":"Ukraine","data":"10GB","prijs":"27","dagen":"30"},{"land":"Ukraine","data":"5GB","prijs":"22","dagen":"30"},{"land":"United Arab Emirates","data":"10GB","prijs":"85","dagen":"30"},{"land":"United Arab Emirates","data":"5GB","prijs":"51","dagen":"30"},{"land":"United Kingdom","data":"10GB","prijs":"35","dagen":"30"},{"land":"United Kingdom","data":"5GB","prijs":"26","dagen":"30"},{"land":"United States","data":"10GB","prijs":"31","dagen":"30"},{"land":"United States","data":"5GB","prijs":"24","dagen":"30"},{"land":"Uruguay","data":"10GB","prijs":"80","dagen":"30"},{"land":"Uruguay","data":"5GB","prijs":"49","dagen":"30"},{"land":"Uzbekistan","data":"10GB","prijs":"28","dagen":"30"},{"land":"Uzbekistan","data":"5GB","prijs":"22","dagen":"30"},{"land":"Venezuela","data":"10GB","prijs":"106","dagen":"30"},{"land":"Venezuela","data":"5GB","prijs":"63","dagen":"30"}];
var rows = [], sortKey = 'land', sortDir = 1;

// ===== gb =====
// Purpose: Extract numeric GB value from a data string like "5GB" or "10 GB"
function gb(d) { var m = ('' + d).match(/(\d+)/); return m ? parseInt(m[1], 10) : 0; }

// ===== parseCSV =====
// Purpose: Parse a raw CSV string into a 2D array, handling quoted fields
function parseCSV(text) {
  var out = [], row = [], cur = '', q = false;
  for (var i = 0; i < text.length; i++) {
    var c = text[i];
    if (q) {
      if (c === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else { q = false; } }
      else cur += c;
    } else {
      if (c === '"') q = true;
      else if (c === ',') { row.push(cur); cur = ''; }
      else if (c === '\n') { row.push(cur); out.push(row); row = []; cur = ''; }
      else if (c === '\r') {}
      else cur += c;
    }
  }
  if (cur !== '' || row.length) { row.push(cur); out.push(row); }
  return out;
}

// ===== findCol =====
// Purpose: Find column index by matching lowercase header names against a list of candidates
function findCol(headers, names) {
  for (var i = 0; i < headers.length; i++) {
    var h = headers[i].toLowerCase().replace(/\s+/g, '');
    for (var j = 0; j < names.length; j++) { if (h.indexOf(names[j]) === 0 || h === names[j]) return i; }
  }
  return -1;
}

// ===== fromCSV =====
// Purpose: Convert parsed CSV grid into an array of row objects
function fromCSV(text) {
  var grid = parseCSV(text).filter(function(r) { return r.some(function(c) { return (c || '').trim() !== ''; }); });
  if (grid.length < 2) return null;
  var head = grid[0].map(function(s) { return (s || '').trim(); });
  var iL = findCol(head, ['land', 'country']);
  var iD = findCol(head, ['data', 'bundel', 'volume']);
  var iP = findCol(head, ['prijs', 'price']);
  var iG = findCol(head, ['geldigheid', 'validity', 'dagen', 'days']);
  if (iL < 0 || iP < 0) return null;
  var res = [];
  for (var r = 1; r < grid.length; r++) {
    var c = grid[r];
    var land = (c[iL] || '').trim();
    if (!land) continue;
    var dRaw = iD >= 0 ? (c[iD] || '').trim() : '';
    var dataLbl = dRaw ? (gb(dRaw) ? gb(dRaw) + 'GB' : dRaw) : '';
    var pRaw = (c[iP] || '').replace(/[^\d.,]/g, '').replace(',', '.');
    var prijs = pRaw ? Math.round(parseFloat(pRaw)) : '';
    var dagen = iG >= 0 ? ((c[iG] || '').replace(/[^\d]/g, '') || '30') : '30';
    res.push({ land: land, data: dataLbl, prijs: '' + prijs, dagen: dagen });
  }
  return res.length ? res : null;
}

// ===== esc =====
// Purpose: HTML-escape a string to prevent XSS when injecting into innerHTML
function esc(s) { return ('' + s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

// ===== mailto =====
// Purpose: Build a mailto: URL pre-filled with country and bundle info
function mailto(r) {
  var subj = 'eSIM-aanvraag: ' + r.land + ' ' + r.data;
  var body = 'Hoi Dennis,\n\nIk wil graag een eSIM bestellen voor het buitenland.\n\nLand: ' + r.land + '\nBundel: ' + r.data + ' (30 dagen)\nPrijs: \u20ac ' + r.prijs + '\n\nKun je me laten weten hoe ik dit kan afronden?\n\nMet vriendelijke groet,\n';
  return 'mailto:dennis@mastersintelecom.nl?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
}

// ===== render =====
// Purpose: Filter, sort and render the price table rows based on current state
// Triggers: On search input, filter change, or column header click
function render() {
  var q = (document.getElementById('q').value || '').toLowerCase().trim();
  var f = document.getElementById('f').value;
  var list = rows.filter(function(r) {
    if (f && r.data !== f) return false;
    if (q && r.land.toLowerCase().indexOf(q) < 0) return false;
    return true;
  });
  list.sort(function(a, b) {
    var x, y;
    if (sortKey === 'land') { x = a.land.toLowerCase(); y = b.land.toLowerCase(); return x < y ? -1 * sortDir : x > y ? 1 * sortDir : 0; }
    if (sortKey === 'gb') { x = gb(a.data); y = gb(b.data); }
    else { x = parseFloat(a.prijs) || 0; y = parseFloat(b.prijs) || 0; }
    if (x !== y) return (x - y) * sortDir;
    return a.land.toLowerCase() < b.land.toLowerCase() ? -1 : 1;
  });
  var tb = document.getElementById('tb');
  var st = document.getElementById('state');
  if (!list.length) {
    tb.innerHTML = '';
    st.style.display = 'block';
    st.textContent = rows.length ? 'Geen resultaten. Probeer een ander land.' : 'Geen prijzen gevonden.';
  } else {
    st.style.display = 'none';
    var html = '';
    for (var i = 0; i < list.length; i++) {
      var r = list[i];
      html += '<tr><td class="land">' + esc(r.land) + '</td>'
        + '<td><span class="badge">' + esc(r.data) + '</span></td>'
        + '<td class="prijs">\u20ac ' + esc(r.prijs) + '</td>'
        + '<td class="geld">' + esc(r.dagen) + ' dagen</td>'
        + '<td class="bestel"><a class="btn-bestel" href="' + mailto(r) + '">Bestellen</a></td></tr>';
    }
    tb.innerHTML = html;
  }
  document.getElementById('count').textContent = list.length + ' van ' + rows.length + ' bundels';
  // Update sort arrow indicators
  ['land', 'gb', 'prijs'].forEach(function(k) {
    var th = document.querySelector('th[data-k="' + k + '"]');
    th.classList.toggle('act', k === sortKey);
    var arr = document.getElementById('a-' + k);
    arr.innerHTML = k === sortKey
      ? (sortDir > 0 ? '<svg viewBox="0 0 24 24"><path d="M7 14l5-5 5 5"/></svg>' : '<svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5"/></svg>')
      : '<svg viewBox="0 0 24 24"><path d="M7 10l5-5 5 5M7 14l5 5 5-5"/></svg>';
  });
}

// ===== start =====
// Purpose: Set the rows array and trigger a render
function start(data) { rows = data; render(); }

// Event listeners for search and filter
document.getElementById('q').addEventListener('input', render);
document.getElementById('f').addEventListener('change', render);

// Sortable column headers
document.querySelectorAll('th.sortable').forEach(function(th) {
  th.addEventListener('click', function() {
    var k = th.getAttribute('data-k');
    if (sortKey === k) sortDir *= -1; else { sortKey = k; sortDir = 1; }
    render();
  });
});

// ===== INIT: load fallback data immediately, then try fetching live CSV =====
(function() {
  start(FALLBACK);
  fetch(GVIZ)
    .then(function(r) { if (!r.ok) throw 0; return r.text(); })
    .then(function(t) { var d = fromCSV(t); if (d && d.length) start(d); })
    .catch(function() {});
})();
