(function(){
  var EP='https://app.stroomlijn.nu/api/public/landing-pages/4458/sheet-data';
  function esc(s){var d=document.createElement('div');d.textContent=s==null?'':String(s);return d.innerHTML;}
  function pick(row,key){
    if(row[key]!=null)return row[key];
    var lk=key.toLowerCase();
    for(var k in row){if(k.toLowerCase()===lk)return row[k];}
    return '';
  }
  function render(rows){
    var grid=document.getElementById('bloggrid');
    var items=rows.filter(function(r){return String(pick(r,'status')||'live').toLowerCase()!=='verborgen' && pick(r,'slug') && pick(r,'titel');});
    items.sort(function(a,b){return String(pick(b,'datum_iso')).localeCompare(String(pick(a,'datum_iso')));});
    if(!items.length){throw new Error('leeg');}
    grid.innerHTML=items.map(function(r){
      var img=esc(pick(r,'afbeelding'));
      var imgTag=img?'<img src="'+img+'" alt="'+esc(pick(r,'titel'))+'" loading="lazy" onerror="this.style.display=\'none\'">':'';
      return '<a class="bcard" href="/blog/'+encodeURIComponent(pick(r,'slug'))+'/">'
        +'<div class="bcard-img" style="background:var(--grad-135)">'+imgTag+'</div>'
        +'<div class="bcard-body">'
        +'<span class="cat">'+esc(pick(r,'categorie'))+'</span>'
        +'<h3>'+esc(pick(r,'titel'))+'</h3>'
        +'<p>'+esc(pick(r,'samenvatting'))+'</p>'
        +'<div class="meta"><span><time datetime="'+esc(pick(r,'datum_iso'))+'">'+esc(pick(r,'datum_label'))+'</time> &middot; '+esc(pick(r,'leestijd'))+'</span><span class="more">Lees meer &rarr;</span></div>'
        +'</div></a>';
    }).join('');
  }
  fetch(EP).then(function(r){return r.json();}).then(function(d){
    var rows=Array.isArray(d)?d:(d.rows||d.data||d.values||[]);
    render(rows);
  }).catch(function(){
    document.getElementById('blogfallback').style.display='block';
  });
})();